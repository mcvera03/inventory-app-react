import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Categoria(){
  const [cats,setCats]=useState([]); const [name,setName]=useState('')
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('categories').select('*').order('id'); setCats(data||[]) }
  async function add(){ await supabase.from('categories').insert([{ name }]); setName(''); load() }
  return (<div className="container"><h2>Categorías</h2><div className="card"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre"/><button onClick={add}>Agregar</button><ul>{cats.map(c=><li key={c.id}>{c.name}</li>)}</ul></div></div>)
}
