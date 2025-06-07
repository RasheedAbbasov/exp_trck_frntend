import React from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();


    return (
        
        <div>
            <div>
                <h1>Are you ready to start tracking your expenses </h1>
                <p className = "Start">Start tracking your expenses</p>
            </div>
            <button onClick={() => navigate('/login')}>Click to Login</button>
        </div>
        
    );




    
}

export default Home;
