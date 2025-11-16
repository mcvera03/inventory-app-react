import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Categories(){
  const [items,setItems]=useState([])
  const [name,setName]=useState('')
  const fetch = async ()=>{
    const { data } = await supabase.from('categories').select('*').order('id',{ascending:false}).limit(100)
    setItems(data||[])
  }
  useEffect(()=>{ fetch() },[])
  const add=async()=>{ if(!name)return alert('req'); await supabase.from('categories').insert({name}); setName(''); fetch() }
  return (
    <div>
      <h2>Categorías</h2>
      <div style={{maxWidth:600,margin:'0 auto'}}>
        <div style={{display:'flex',gap:8}}>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre categoría" />
          <button className="button" onClick={add}>Agregar</button>
        </div>
        <div style={{marginTop:12}}>
          {items.map(c=> <div key={c.id} className="card">{c.name}</div>)}
        </div>
      </div>
    </div>
  )
}