import React, {useState} from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) return alert(error.message)
    nav('/')
  }
  return (<div className='form-card'><h2>Iniciar sesión</h2><form onSubmit={handleLogin}><label>Correo:</label><input className='input' value={email} onChange={e=>setEmail(e.target.value)}/><label>Contraseña:</label><input className='input' type='password' value={password} onChange={e=>setPassword(e.target.value)}/><div className='center'><button className='button' type='submit'>Iniciar sesión</button></div></form></div>)
}
