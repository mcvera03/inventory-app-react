import React, { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Reset(){
  const [email,setEmail]=useState('')
  async function handle(e){
    e.preventDefault()
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + '/login' })
    if(error) return alert(error.message)
    alert('Revisa tu correo para el enlace de restablecimiento.')
  }
  return (
    <div className='card form'>
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handle}>
        <label>Correo<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <div style={{marginTop:10}}><button className='btn' type='submit'>Enviar</button></div>
      </form>
    </div>
  )
}
