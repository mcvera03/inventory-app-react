import React, {useEffect, useState} from 'react'
import { supabase } from '../lib_supabase'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}){
  const [ok, setOk] = useState(null)
  useEffect(()=>{
    supabase.auth.getSession().then(res=>{
      setOk(!!res.data.session)
    })
  },[])
  if(ok === null) return <div className="container">Comprobando sesión...</div>
  if(!ok) return <Navigate to="/login" replace />
  return children
}
