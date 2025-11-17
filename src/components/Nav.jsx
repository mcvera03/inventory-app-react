import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function Nav(){
  const [user, setUser] = useState(null)
  const nav = useNavigate()
  useEffect(()=>{
    supabase.auth.getSession().then(r=> setUser(r.data.session?.user ?? null))
    const { data: s } = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user ?? null))
    return ()=> s?.subscription?.unsubscribe && s.subscription.unsubscribe()
  },[])
  async function logout(){
    await supabase.auth.signOut()
    nav('/login')
  }
  return (
    <nav className="topnav">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" style={{height:48}}/>
      </div>
      <div className="links">
        <Link to="/">Inicio</Link>
        <Link to="/producto">Producto</Link>
        <Link to="/categoria">Categorías</Link>
        <Link to="/proveedores">Proveedores</Link>
        <Link to="/reportes">Reportes</Link>
        <Link to="/configuracion">Configuración</Link>
        <Link to="/ayuda">Ayuda</Link>
        {!user ? (<><Link to="/login">Iniciar sesión</Link><Link to="/signup">Crear cuenta</Link></>) : (<button className="btn-logout" onClick={logout}>Salir</button>)}
      </div>
    </nav>
  )
}
