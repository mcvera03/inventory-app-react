import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar" role="navigation" aria-label="main">
      <Link to="/" className="pill">Producto</Link>
      <Link to="/categorias" className="pill">Categorías</Link>
      <Link to="/proveedores" className="pill">Proveedores</Link>
      <Link to="/reportes" className="pill">Reportes</Link>
      <Link to="/login" className="pill" style={{background:'#666'}}>Iniciar sesión</Link>
    </nav>
  )
}