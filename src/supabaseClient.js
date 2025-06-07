import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL; // ✅ REAL URL from Supabase
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY; // ✅ REAL anon key from Supabase

// console.log("Supabase ULR:", process.env.REACT_APP_SUPABASE_URL);
// console.log("Supabase Key:", process.env.REACT_APP_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseKey);
