import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabase'
export default function Categorias(){ const [cats,setCats]=useState([]);
 useEffect(()=>{ supabase.from('categories').select('*').then(r=>{ if(r.error) alert(r.error.message); else setCats(r.data) }) },[])
 return (<div><h1>Categorías</h1><table className='table'><thead><tr><th>Nombre</th><th>Descripción</th></tr></thead><tbody>{cats.map(c=>(<tr key={c.id}><td>{c.name}</td><td>{c.description}</td></tr>))}</tbody></table></div>) }
