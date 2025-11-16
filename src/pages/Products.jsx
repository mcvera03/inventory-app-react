import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Products(){
  const [items,setItems]=useState([])
  const [name,setName]=useState('')
  useEffect(()=>{ fetch() },[])
  async function fetch(){ const { data } = await supabase.from('products').select('*').order('id',{ascending:false}); setItems(data||[]) }
  async function add(){ if(!name) return alert('nombre requerido'); await supabase.from('products').insert({name,stock:0}); setName(''); fetch() }
  async function remove(id){ if(!confirm('Eliminar?')) return; await supabase.from('products').delete().eq('id',id); fetch() }
  return (
    <div>
      <h2>Productos</h2>
      <div style={{maxWidth:700,margin:'0 auto'}}>
        <div style={{display:'flex',gap:8}}>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre producto"/>
          <button className="button" onClick={add}>Agregar</button>
        </div>
        <div style={{marginTop:16}}>
          {items.length===0 && <p>No hay productos</p>}
          {items.map(it=>(
            <div key={it.id} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <div>{it.name} <small style={{color:'#666'}}> (stock: {it.stock})</small></div>
              <div><button className="button" onClick={()=>remove(it.id)} style={{background:'#c33'}}>Eliminar</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}