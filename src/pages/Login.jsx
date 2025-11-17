import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [msg,setMsg]=useState('')
  const nav = useNavigate()
  async function handleLogin(e){
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) setMsg(error.message)
    else nav('/')
  }
  return (
    <div className="container card">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div><label>Email</label><br/><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div><label>Password</label><br/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <div style={{marginTop:12}}><button type="submit">Entrar</button></div>
      </form>
      <p style={{color:"red"}}>{msg}</p>
    </div>
  )
}
