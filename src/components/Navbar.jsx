import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Inicio</Link>
      </div>
      <div className="nav-center">
        <Link to="/productos" className="pill">Producto</Link>
        <Link to="/categorias" className="pill">Categorias</Link>
        <Link to="/proveedores" className="pill">Proveedores</Link>
        <Link to="/reportes" className="pill">Reportes</Link>
        <Link to="/usuario" className="pill">Usuario</Link>
        <Link to="/configuracion" className="pill">Configuración</Link>
      </div>
      <div className="nav-right">
        <Link to="/login">Inicio de sesión</Link>
        <Link to="/signup">Crear cuenta</Link>
      </div>
    </nav>
  )
}
