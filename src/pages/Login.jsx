import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate, Link } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()

  async function handle(e){
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) return alert(error.message)
    nav('/')
  }

  return (
    <div className="card form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handle}>
        <label>Correo<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label>Contraseña<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        <div style={{marginTop:10}}>
          <button className="btn" type="submit">Iniciar sesión</button>
          <div style={{marginTop:8}}><Link to="/signup">¿No tienes cuenta? Crear cuenta</Link></div>
          <div style={{marginTop:6}}><Link to="/reset">Olvidé mi contraseña</Link></div>
        </div>
      </form>
    </div>
  )
}
