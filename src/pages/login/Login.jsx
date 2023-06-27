import React, {useContext} from 'react';
import { MyContext } from '../../App';
import googlLogo from '../../assets/google.png';
import globe from '../../assets/globe.png';
import { MainContainer, SecondContainer, Logo, FormContainer, Globe, LButton } from './styleslogin.jsx';



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
        <MainContainer>
            <Globe src={globe} alt="" />
            <SecondContainer>
                <FormContainer>
                    <Logo src={googlLogo} alt=""/> Sing In With Google
                </FormContainer>
                <LButton onClick={() => googleSIgnIn()}>Sing In</LButton>
                <LButton onClick={() => singOut()}>Log Out</LButton>
            </SecondContainer>
        </MainContainer>
    );
};

export default Login;
