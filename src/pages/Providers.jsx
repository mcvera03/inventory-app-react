import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Providers(){
  const [items,setItems]=useState([])
  const [name,setName]=useState('')
  useEffect(()=>{ fetch() },[])
  const fetch=async()=>{ const { data } = await supabase.from('providers').select('*').order('id',{ascending:false}); setItems(data||[]) }
  const add=async()=>{ if(!name) return; await supabase.from('providers').insert({name}); setName(''); fetch() }
  return (
    <div>
      <h2>Proveedores</h2>
      <div style={{maxWidth:700, margin:'0 auto'}}>
        <div style={{display:'flex',gap:8}}>
          <input className="input" placeholder="Nombre proveedor" value={name} onChange={e=>setName(e.target.value)}/>
          <button className="button" onClick={add}>Agregar</button>
        </div>
        <div style={{marginTop:12}}>
          {items.map(p=> <div key={p.id} className="card">{p.name}</div>)}
        </div>
      </div>
    </div>
  )
}