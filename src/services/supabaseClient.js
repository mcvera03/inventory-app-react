import { createClient } from '@supabase/supabase-js'
const SUPABASE_URL = 'https://yjxrdaqlwvirgmglyyuj.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeHJkYXFsd3ZpcmdtZ2x5eXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNTUzNjQsImV4cCI6MjA3ODgzMTM2NH0.leIHkm_VwSkHOe7e5O1rgvPQj3HkmM1ZNBKQGRBY2UI'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
