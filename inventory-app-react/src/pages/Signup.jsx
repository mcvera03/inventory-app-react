import React, {useState} from 'react'
import { supabase } from '../services/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail]=useState(''), [password,setPassword]=useState(''), [name,setName]=useState('')
  const nav = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({ email, password })
    if(error) return alert(error.message)
    // optionally create profile via RPC or table insert
    nav('/login')
  }

  return (
    <div className="form-card">
      <h2 className="center">Crear cuenta</h2>
      <form onSubmit={handleSignup}>
        <label>Correo electronico:</label>
        <input className="input form-field" value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Nombre:</label>
        <input className="input form-field" value={name} onChange={e=>setName(e.target.value)} />
        <label>Contraseña:</label>
        <input className="input form-field" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="center">
          <button className="button">Crear cuenta</button>
        </div>
      </form>
      <div className="center" style={{marginTop:12}}>
        <a href="/login" style={{color:'#7b2cf2'}}>Ya tengo una cuenta</a>
      </div>
    </div>
  )
}
