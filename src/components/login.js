import React from 'react';
import { supabase } from '../supabaseClient';


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



  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    <div>
      <button>Sign in with Facebook</button>
    </div>
    <div>
      <button>Sign in with Apple</button>
    </div>
    </div>
  );
};



export default Login;
