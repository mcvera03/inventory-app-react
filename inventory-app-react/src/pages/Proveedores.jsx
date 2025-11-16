import React, {useEffect, useState} from 'react'
import { supabase } from '../services/supabaseClient'

export default function Proveedores(){
  const [providers,setProviders]=useState([])
  useEffect(()=>{ supabase.from('providers').select('*').then(r=>{ if(r.error) alert(r.error.message); else setProviders(r.data) }) },[])
  return (
    <div>
      <h1>Proveedores</h1>
      <table className="table">
        <thead><tr><th>Referencia</th><th>Proveedor</th><th>Contacto</th><th>Estado</th></tr></thead>
        <tbody>
          {providers.map(p=>(
            <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.contact}</td><td>Activo</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
