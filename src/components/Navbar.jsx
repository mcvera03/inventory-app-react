import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Navbar(){
  const nav = useNavigate()
  const logout = async ()=>{
    await supabase.auth.signOut()
    nav('/login')
  }
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="/images/principal.png" alt="logo" className="logo" />
      </div>
      <div className="links">
        <Link to="/productos" className="pill">Producto</Link>
        <Link to="/" className="pill">Inicio</Link>
        <Link to="/login" className="pill">Iniciar sesión</Link>
        <Link to="/signup" className="pill">Crear cuenta</Link>
        <button onClick={logout} className="pill link-btn">Salir</button>
      </div>
    </nav>
  )
}
