import React, {useEffect, useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Providers from './pages/Providers'
import Configuracion from "./pages/Configuracion";
import Help from './pages/Help'
import ProtectedRoute from './components/ProtectedRoute'
import { supabase } from './lib_supabase'

export default function App(){
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getInitialSession = async () => {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        setSession(initialSession);
        setLoading(false);
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
  }, []);

  if (loading) {
    return <div className="app loading-screen">Cargando aplicación...</div>; 
  }

  return (
    <div className="app">
      <div style={{flex:1}}>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/productos" element={<ProtectedRoute><Products/></ProtectedRoute>} />
            <Route path="/categorias" element={<ProtectedRoute><Categories/></ProtectedRoute>} />
            <Route path="/proveedores" element={<ProtectedRoute><Providers/></ProtectedRoute>} />
            
            <Route path="/configuracion" element={<ProtectedRoute><Configuracion/></ProtectedRoute>} />
            <Route path="/help" element={<ProtectedRoute><Help/></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
