import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib_supabase'

export default function Navbar(){
  const [user, setUser] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    const s = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    supabase.auth.getSession().then(r=>setUser(r.data.session?.user ?? null))
    return ()=> s.data?.subscription?.unsubscribe && s.data.subscription.unsubscribe()
  },[])

  const logout = async ()=>{
    await supabase.auth.signOut()
    nav('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand"><img src="/principal.svg" className="logo" alt="logo" style={{verticalAlign:'middle',marginRight:8}}/> INVENTORY MANAGEMENT</Link>
      </div>
      <div className="nav-center nav-links" style={{flex:1,textAlign:'center'}}>
        <Link to="/productos" className="pill">Producto</Link>
        <Link to="/categorias" className="pill">Categorias</Link>
        <Link to="/proveedores" className="pill">Proveedores</Link>
        <Link to="/reportes" className="pill">Reportes</Link>
        <Link to="/alertas" className="pill">Alertas</Link>
      </div>
      <div className="nav-right">
        {!user ? <>
          <Link to="/login" style={{color:'white',marginRight:10}}>Iniciar sesión</Link>
          <Link to="/signup" style={{color:'white'}}>Crear cuenta</Link>
        </> : <>
          <span style={{marginRight:12}}>Hola</span>
          <button onClick={logout} className="button">Salir</button>
        </>}
      </div>
    </nav>
  )
}
