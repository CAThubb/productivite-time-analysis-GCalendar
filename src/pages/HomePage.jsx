import React, {useContext} from 'react';
import { MyContext } from '../App.jsx'
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HomePage = () => {
    const { session, supabase } = useContext(MyContext);

    async function singOut(){
        await supabase.auth.signOut();
        console.log("Signed out");
        console.log(session);
    };

    async function getEvents(){
        console.log("Getting events");
        console.log('session: ', session);
        const events = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session.provider_token}`,
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
        });
    };

    return (
        <div>
            {session ? (
                <Layout>
                    <div>
                        <h1>Home page for user {session.user.email}</h1>
                        <button onClick={() => singOut()}>Sing Out</button>
                        <button onClick={() => getEvents()}>Get Events</button>
                    </div>
                </Layout>
            )
            :
            (
                <Navigate to="/home"/>
            )
        }
        </div>
    )
}

export default HomePage;