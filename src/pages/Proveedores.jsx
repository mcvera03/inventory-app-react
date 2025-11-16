import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabase'
export default function Proveedores(){ const [prov,setProv]=useState([]); useEffect(()=>{ supabase.from('providers').select('*').then(r=>{ if(r.error) alert(r.error.message); else setProv(r.data) }) },[])
 return (<div><h1>Proveedores</h1><table className='table'><thead><tr><th>ID</th><th>Proveedor</th><th>Contacto</th></tr></thead><tbody>{prov.map(p=>(<tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.contact}</td></tr>))}</tbody></table></div>) }
