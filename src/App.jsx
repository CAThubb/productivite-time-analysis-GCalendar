import { useState, createContext } from 'react'
import './App.css'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ProtectedRoutes from "./routes/protected/ProtectedRoutes"
import HomePage from "./pages/HomePage"
import Login from "./pages/login/Login"


export const MyContext = createContext();

function App() {
  const session = useSession();
  const supabase = useSupabaseClient();

  async function SingIn(){
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: ['https://www.googleapis.com/auth/calendar',
                'https://www.googleapis.com/auth/calendar.events',
                ],
      }
    });
    if (error) {
      alert("Error logging in with Google provider with supabase");
      console.log(error);
    }
  }

  async function SingOut(){
    await supabase.auth.SingOut();
  };

  console.log(session);
  return (
    <>
    <MyContext.Provider value={{session, supabase}}>
      <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<HomePage/>} exact/>
          </Route>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App
