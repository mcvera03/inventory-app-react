import React, {useEffect,useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Inventario(){
  const [products,setProducts]=useState([]); const [name,setName]=useState(''); const [code,setCode]=useState(''); const [stock,setStock]=useState(0)
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('products').select('*').order('id'); setProducts(data||[]) }
  async function add(e){ e.preventDefault(); await supabase.from('products').insert([{ name, code, stock: Number(stock) }]); setName(''); setCode(''); setStock(0); load() }
  async function del(id){ if(!confirm('Eliminar?')) return; await supabase.from('products').delete().eq('id',id); load() }
  return (<div className="container"><h2>Inventario</h2><div className="card">
    <form onSubmit={add} className="center"><input placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)}/><input placeholder="Código" value={code} onChange={e=>setCode(e.target.value)}/><input type="number" placeholder="Stock" value={stock} onChange={e=>setStock(e.target.value)}/><button type="submit">Agregar</button></form>
    <table><thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Acciones</th></tr></thead><tbody>{products.map(p=>(<tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.stock}</td><td><button onClick={()=>del(p.id)}>Eliminar</button></td></tr>))}</tbody></table>
  </div></div>)
}
