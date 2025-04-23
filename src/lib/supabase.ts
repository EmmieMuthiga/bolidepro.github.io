
import { createClient } from "@supabase/supabase-js";

// These are placeholder values that will be replaced with your actual Supabase credentials
// You'll need to set these in your Supabase integration in Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
