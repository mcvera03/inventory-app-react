import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Producto(){
  const [productos,setProductos]=useState([]); const [name,setName]=useState(''); const [code,setCode]=useState(''); const [stock,setStock]=useState(0)
  useEffect(()=>fetchProducts(),[])
  async function fetchProducts(){ const { data, error } = await supabase.from('products').select('id,code,name,stock').order('id'); if(error) return console.error(error); setProductos(data||[]) }
  async function add(e){ e.preventDefault(); const { error } = await supabase.from('products').insert([{ name, code, stock: Number(stock) }]); if(error) return alert(error.message); setName(''); setCode(''); setStock(0); fetchProducts() }
  async function del(id){ if(!confirm('Eliminar?')) return; const { error } = await supabase.from('products').delete().eq('id',id); if(error) return alert(error.message); fetchProducts() }
  return (
    <div className="container">
      <h2>Productos</h2>
      <div className="card">
        <form onSubmit={add} style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          <input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} required />
          <input placeholder="Código" value={code} onChange={e=>setCode(e.target.value)} />
          <input type="number" placeholder="Stock" value={stock} onChange={e=>setStock(e.target.value)} />
          <button type="submit">Agregar</button>
        </form>
        <table style={{marginTop:20}}>
          <thead><tr><th>ID</th><th>Código</th><th>Nombre</th><th>Stock</th><th>Acciones</th></tr></thead>
          <tbody>{productos.map(p=>(
            <tr key={p.id}><td>{p.id}</td><td>{p.code}</td><td>{p.name}</td><td>{p.stock}</td><td><button onClick={()=>del(p.id)}>Eliminar</button></td></tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  )
}
