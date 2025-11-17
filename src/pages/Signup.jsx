import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('')
  const nav = useNavigate()
  async function handleSubmit(e){
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if(error) setMsg(error.message)
    else { setMsg('Cuenta creada. Revisa tu correo.'); nav('/login') }
  }
  return (
    <div className="container card">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Email</label><br/><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><label>Password</label><br/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <div style={{marginTop:12}}><button type="submit">Crear</button></div>
      </form>
      <p style={{color:'red'}}>{msg}</p>
    </div>
  )
}
