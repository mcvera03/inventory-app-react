import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function Navbar(){
  const [user, setUser] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    async function getUser(){
      const { data } = await supabase.auth.getUser()
      setUser(data?.user || null)
    }
    getUser()
    const subscription = supabase.auth.onAuthStateChange((_event, session)=>{
      setUser(session?.user || null)
    })
    return ()=> subscription.data.subscription.unsubscribe()
  },[])

  async function logout(){
    await supabase.auth.signOut()
    setUser(null)
    nav('/login')
  }

  return (
    <header className="navbar">
      <div className="brand">
        <img src="/images/principal.png" alt="logo" className="logo"/>
        <div>
          <div className="title">Inventory</div>
          <div className="subtitle">Sistema de Inventario</div>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/products">Inventario</Link>
        <Link to="/categories">Categorías</Link>
        <Link to="/providers">Proveedores</Link>
        <Link to="/reports">Reportes</Link>
        <Link to="/alerts">Alertas</Link>
        <Link to="/config">Configuración</Link>
        <Link to="/help">Ayuda</Link>
      </nav>

      <div className="nav-right">
        {user ? (
          <>
            <span className="muted">{user.email}</span>
            <button onClick={logout} className="btn small">Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn small outline">Iniciar sesión</Link>
            <Link to="/signup" className="btn small">Crear cuenta</Link>
          </>
        )}
      </div>
    </header>
  )
}
