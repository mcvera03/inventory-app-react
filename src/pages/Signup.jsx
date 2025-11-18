import React, {useState} from 'react'
import { supabase } from '../lib_supabase'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
  const nav=useNavigate()

  const handleSignup=async(e)=>{
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({ email, password })
    if(error) return alert(error.message)
    if(data?.user) await supabase.from('profiles').insert({ id:data.user.id, full_name: name })
    nav('/login')
  }

  return (
    <div className="form-card">
      <h2>Crear cuenta</h2>
      <form onSubmit={handleSignup}>
        <label>Correo electronico:</label>
        <input className='input' value={email} onChange={e=>setEmail(e.target.value)}/>
        <label>Nombre:</label>
        <input className='input' value={name} onChange={e=>setName(e.target.value)}/>
        <label>Contraseña:</label>
        <input className='input' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        <div className='center'><button className='button' type='submit'>Crear cuenta</button></div>
      </form>
    </div>
  )
}
