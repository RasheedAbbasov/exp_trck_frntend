import React from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';


const Expenses = () => {
const navigate = useNavigate();

const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Sign out error:', error.message);
    else navigate('/login'); // Redirect to login after sign out
}



    return (
        <div>
            <button onClick = {signOut}>Sign out</button>
        </div>
        

        
    )
}


export default Expenses;