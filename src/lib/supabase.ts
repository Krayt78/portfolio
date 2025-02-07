import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Provide fallback values for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set up your .env file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);