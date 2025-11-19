import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib_supabase'

export default function Navbar(){
  const [session, setSession] = useState(null)
  const nav = useNavigate()

  useEffect(()=>{
    const getInitialSession = async () => {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        setSession(initialSession);
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
        setSession(newSession);
    })

    getInitialSession();

    return () => {
        if (listener?.subscription) {
            listener.subscription.unsubscribe();
        }
    }
  },[])

  const logout = async ()=>{
    await supabase.auth.signOut()
    nav('/login')
  }

  const isAuthenticated = !!session;
  const userEmail = session?.user?.email || 'Usuario'; 

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">
          <img src="/principal.png" className="logo" alt="logo" style={{verticalAlign:'middle', marginRight:8}}/> 
          INVENTORY MANAGEMENT
        </Link>
      </div>

      <div className="nav-center nav-links" style={{flex:1, textAlign:'center'}}>
        <Link to="/productos" className="pill">Producto</Link>
        <Link to="/categorias" className="pill">Categorias</Link>
        <Link to="/proveedores" className="pill">Proveedores</Link>
        
        <Link to="/configuracion" className="pill">Configuración</Link>
        <Link to="/help" className="pill">Ayuda y soporte</Link>
      </div>

      <div className="nav-right">
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={{color:'white',marginRight:10}}>Iniciar sesión</Link>
            <Link to="/signup" style={{color:'white'}}>Crear cuenta</Link>
          </>
        ) : (
          <>
            <span style={{marginRight:12}}>Hola, {userEmail}</span> 
            <button onClick={logout} className="button">Salir</button>
          </>
        )}
      </div>
    </nav>
  )
}
