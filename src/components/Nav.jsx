import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function Nav(){
  const [user,setUser]=useState(null)
  const nav = useNavigate()
  useEffect(()=>{
    supabase.auth.getSession().then(r=>setUser(r.data.session?.user ?? null))
    const { data } = supabase.auth.onAuthStateChange((_event, session)=>{
      setUser(session?.user ?? null)
    })
    return ()=> data?.subscription?.unsubscribe && data.subscription.unsubscribe()
  },[])
  async function logout(){ await supabase.auth.signOut(); nav('/login') }
  return (<header className="topnav">
    <div className="brand"><img src="/images/logo.png" alt="logo" className="logo"/></div>
    <nav className="links">
      <Link to="/">Inicio</Link>
      <Link to="/inventario">Inventario</Link>
      <Link to="/entradas">Entradas</Link>
      <Link to="/salidas">Salidas</Link>
      <Link to="/categorias">Categorías</Link>
      <Link to="/proveedores">Proveedores</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Link to="/reportes">Reportes</Link>
      {!user ? (<><Link to="/login">Iniciar sesión</Link><Link to="/signup">Crear cuenta</Link></>) : (<button onClick={logout} className="link-btn">Cerrar sesión</button>)}
    </nav>
  </header>)
}
