import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Products(){
  const [items,setItems]=useState([])
  const [name,setName]=useState('')

  const fetch = async ()=>{
    const { data } = await supabase.from('products').select('*').order('id',{ascending:false}).limit(100)
    setItems(data || [])
  }

  useEffect(()=>{ fetch() },[])

  const add = async ()=>{
    if(!name) return alert('nombre requerido')
    await supabase.from('products').insert({ name, stock:0 })
    setName('')
    fetch()
  }

  const remove = async (id)=>{
    await supabase.from('products').delete().eq('id',id)
    fetch()
  }

  return (
    <div>
      <h2>Productos</h2>
      <div style={{maxWidth:600, margin:'0 auto'}}>
        <div style={{display:'flex', gap:8}}>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre producto" />
          <button className="button" onClick={add}>Agregar</button>
        </div>
        <div style={{marginTop:16}}>
          {items.length===0 && <p>No hay productos</p>}
          {items.map(it=>(
            <div key={it.id} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
              <div>{it.name} <small style={{color:'#666'}}> (stock: {it.stock})</small></div>
              <div>
                <button className="button" onClick={()=>remove(it.id)} style={{background:'#c33'}}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}