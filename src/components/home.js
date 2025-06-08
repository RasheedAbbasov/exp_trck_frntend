import React, { useEffect }from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();


    //Checks if the use is logged in, it so redirects to the page that it set to
    useEffect(() => {
        const {
            data: { subscription },
            } = supabase.auth.onAuthStateChange((event, session) => {
                if(session && session.user) {
                    navigate('/expenses');    
                }
    })
    return () => subscription.unsubscribe();
    }, [navigate]);


    return (
        <div>
            <div>
                <h1>Are you ready to start tracking your expenses </h1>
                <p>Start tracking your expenses</p>
            </div>
            <button onClick={() => navigate('/login')}>Click to Login</button>
        </div>
        
    );




    
}

export default Home;
