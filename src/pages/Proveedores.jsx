import React, {useEffect,useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Proveedores(){
  const [list,setList]=useState([]); const [name,setName]=useState('')
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('providers').select('*').order('id'); setList(data||[]) }
  async function add(){ if(!name) return; await supabase.from('providers').insert([{ name }]); setName(''); load() }
  return (<div className="container"><h2>Proveedores</h2><div className="card"><div className="center"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre"/><button onClick={add}>Agregar</button></div><ul>{list.map(p=>(<li key={p.id}>{p.name}</li>))}</ul></div></div>)
}
