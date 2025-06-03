import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://onhfkrknxkugyxfldqdx.supabase.co'; // ✅ REAL URL from Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uaGZrcmtueGt1Z3l4ZmxkcWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3ODcwMjEsImV4cCI6MjA2NDM2MzAyMX0.XIaE_NUDWwLH_APKmVJJIlUOuPrLxiRQ2EAJrgzv3K4'; // ✅ REAL anon key from Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
