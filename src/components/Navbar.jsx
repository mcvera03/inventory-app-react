import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function Navbar(){
  const nav = useNavigate()
  const logout = async ()=>{ await supabase.auth.signOut(); nav('/login') }
  return (
    <nav className="navbar" role="navigation">
      <Link to="/"><img src="/principal.png" alt="logo" className="logo"/></Link>
      <div style={{flex:1,display:'flex',justifyContent:'center',gap:8}}>
        <Link to="/productos" className="pill">Producto</Link>
        <Link to="/categorias" className="pill">Categorías</Link>
        <Link to="/proveedores" className="pill">Proveedores</Link>
        <Link to="/reportes" className="pill">Reportes</Link>
        <Link to="/ayuda" className="pill">Ayuda</Link>
        <Link to="/configuracion" className="pill">Configuración</Link>
      </div>
      <div style={{display:'flex',gap:8}}>
        <Link to="/login" className="pill" style={{background:'#334155'}}>Iniciar sesión</Link>
      </div>
    </nav>
  )
}