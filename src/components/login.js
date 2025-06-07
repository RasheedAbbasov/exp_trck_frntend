import React from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';


const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Login error:', error.message);
  };





const Login = () => {
  // const signInWithGoogle = async () => {
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //   });
  //   if (error) console.error('Login error:', error.message);
  // };
  const navigate = useNavigate();


  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button>Sign in with Facebook</button>
      <button>Sign in with Apple</button>
      
      {/* When Clicked sends user back to home page */}
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
};



export default Login;
