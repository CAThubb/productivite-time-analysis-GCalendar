import React, {useContext} from 'react';
import { MyContext } from '../../App';

const Login = () => {
    const { session, supabase } = useContext(MyContext);

    async function googleSIgnIn(){
        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: ['https://www.googleapis.com/auth/calendar',
                'https://www.googleapis.com/auth/calendar.events',
                ],
            }
        });
        if(error){
            alert("Error logging in to Google provider with Supabase");
            console.log(error);
        }
        else {
            await supabase.auth.refreshSession();
        }
    }
    async function singOut(){
        await supabase.auth.signOut();
        console.log("Signed out");
        console.log(session);
    };

    console.log(session);

    return (
        <div>
            <h1>Sing in with Google</h1>
            <button onClick={() => googleSIgnIn()}>Sing In</button>
            <button onClick={() => singOut()}>Sing Out</button>
        </div>
    );
};

export default Login;