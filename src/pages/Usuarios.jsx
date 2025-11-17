import React, {useEffect,useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Usuarios(){
  const [users,setUsers]=useState([])
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('profiles').select('*').order('created_at'); setUsers(data||[]) }
  return (<div className="container"><h2>Usuarios</h2><div className="card"><ul>{users.map(u=>(<li key={u.id}>{u.full_name} - {u.role||'user'}</li>))}</ul></div></div>)
}
