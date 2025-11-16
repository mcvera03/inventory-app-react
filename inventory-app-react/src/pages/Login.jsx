import React, {useState} from 'react'
import { supabase } from '../services/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) return alert(error.message)
    nav('/productos')
  }

  return (
    <div className="form-card">
      <h2 className="center">Inicio de sesión</h2>
      <form onSubmit={handleLogin}>
        <label>Usuario:</label>
        <input className="input form-field" value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Contraseña: <a style={{color:'#7b2cf2'}}>¿Olvidaste tu contraseña?</a></label>
        <input className="input form-field" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="center">
          <button className="button">Iniciar sesión</button>
        </div>
      </form>
      <div className="center" style={{marginTop:12}}>
        <a href="/signup" style={{color:'#7b2cf2'}}>¿No tienes una cuenta?</a>
      </div>
    </div>
  )
}
