import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const nav=useNavigate()
  const handle=async(e)=>{ e.preventDefault(); const { error } = await supabase.auth.signInWithPassword({ email, password }); if(error) return alert(error.message); nav('/') }
  return (
    <div className="form-card">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handle}>
        <label>Email</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)}/>
        <label>Contraseña</label><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <div style={{textAlign:'center',marginTop:12}}><button className="button" type="submit">Iniciar sesión</button></div>
      </form>
    </div>
  )
}