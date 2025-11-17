import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('')
  const nav = useNavigate()
  async function handle(e){ e.preventDefault(); const { error } = await supabase.auth.signInWithPassword({ email, password }); if(error) return alert(error.message); nav('/') }
  return (<div className="container"><div className="card" style={{maxWidth:480,margin:'0 auto'}}><h2>Iniciar sesión</h2>
    <form onSubmit={handle}>
      <div><label>Correo</label><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <div><label>Contraseña</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
      <div style={{marginTop:12}}><button type="submit">Entrar</button></div>
    </form>
  </div></div>)
}
