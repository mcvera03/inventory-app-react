import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'
export default function Signup(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [name,setName]=useState('')
  const nav = useNavigate()
  async function handle(e){ e.preventDefault(); const { data, error } = await supabase.auth.signUp({ email, password }); if(error) return alert(error.message); if(data?.user) await supabase.from('profiles').insert({ id:data.user.id, full_name:name }).catch(()=>{}); alert('Cuenta creada'); nav('/login') }
  return (<div className="container"><div className="card" style={{maxWidth:520,margin:'0 auto'}}><h2>Crear cuenta</h2>
    <form onSubmit={handle}>
      <div><label>Nombre</label><input value={name} onChange={e=>setName(e.target.value)} /></div>
      <div><label>Correo</label><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
      <div><label>Contraseña</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
      <div style={{marginTop:12}}><button type="submit">Crear cuenta</button></div>
    </form>
  </div></div>)
}
