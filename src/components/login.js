import React, { useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';


// const signInWithGoogle = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//     });
//     if (error) console.error('Login error:', error.message);
//   };



//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) =>   {
//       if (session && session.user) {
//         navigate('/expenses')
//       }
//     })
//     return () => subscription.unsubscribe();
//   }, [navigate]);




const Login = () => {

const navigate = useNavigate();


const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Login error:', error.message);
  };



  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) =>   {
      if (session && session.user) {
        navigate('/expenses')
      }
    })
    return () => subscription.unsubscribe();
  }, [navigate]);




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
