import React, { useEffect, useState } from 'react'
import { supabase } from '../lib_supabase'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}){
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(()=>{
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        setIsAuthenticated(!!session); 
      } catch (error) {
        setIsAuthenticated(false);
        console.error("Error al obtener la sesión de Supabase:", error);
      } finally {
        setIsLoading(false); 
      }
    };
    
    checkSession();
  }, []) 

  if (isLoading) {
    return <div className="container" style={{paddingTop: 50}}>Cargando sesión...</div>
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  
  return children
}
