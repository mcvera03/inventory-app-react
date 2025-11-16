import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Providers(){
  const [items,setItems]=useState([]); const [name,setName]=useState('')
  useEffect(()=>{ fetch() },[])
  async function fetch(){ const { data } = await supabase.from('providers').select('*').order('id',{ascending:false}); setItems(data||[]) }
  async function add(){ if(!name) return alert('req'); await supabase.from('providers').insert({name}); setName(''); fetch() }
  async function remove(id){ if(!confirm('Eliminar?')) return; await supabase.from('providers').delete().eq('id',id); fetch() }
  return (
    <div>
      <h2>Proveedores</h2>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <div style={{display:'flex',gap:8}}><input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre proveedor"/><button className="button" onClick={add}>Agregar</button></div>
        <div style={{marginTop:12}}>{items.map(p=> <div key={p.id} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>{p.name}<button onClick={()=>remove(p.id)} className="button" style={{background:'#c33'}}>Eliminar</button></div>)}</div>
      </div>
    </div>
  )
}