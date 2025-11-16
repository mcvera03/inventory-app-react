import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
export function useAuth(){ const [user,setUser]=useState(null); const [loading,setLoading]=useState(true); useEffect(()=>{ let mounted=true; supabase.auth.getSession().then(({data})=>{ if(mounted) setUser(data.session?.user||null); setLoading(false)}); const { data: listener } = supabase.auth.onAuthStateChange((_e,ses)=>{ if(ses) setUser(ses.user); else setUser(null) }); return ()=>{ mounted=false; listener.subscription.unsubscribe() } },[]); return {user,loading} }
