import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirm,setConfirm]=useState('')
  const [name,setName]=useState('')
  const nav = useNavigate()

  async function handle(e){
    e.preventDefault()
    if(password !== confirm) return alert('Las contraseñas no coinciden')
    const { data, error } = await supabase.auth.signUp({ email, password })
    if(error) return alert(error.message)
    if(data?.user){
      await supabase.from('profiles').insert({ id: data.user.id, full_name: name })
    }
    alert('Cuenta creada. Revisa tu correo si es necesario.')
    nav('/login')
  }

  return (
    <div className="card form">
      <h2>Crear cuenta</h2>
      <form onSubmit={handle}>
        <label>Correo<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label>Nombre<input value={name} onChange={e=>setName(e.target.value)} /></label>
        <label>Contraseña<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        <label>Confirmar contraseña<input type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} /></label>
        <div style={{marginTop:10}}>
          <button className="btn" type="submit">Crear cuenta</button>
        </div>
      </form>
    </div>
  )
}
