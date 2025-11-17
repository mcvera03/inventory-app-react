import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL || 'https://yjxrdaqlwvirgmglyyuj.supabase.co'
const key = import.meta.env.VITE_SUPABASE_ANON_KEY || 'REPLACE_WITH_ANON_KEY'

export const supabase = createClient(url, key)
