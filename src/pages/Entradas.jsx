import React, {useEffect,useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Entradas(){
  const [products,setProducts]=useState([]); const [product,setProduct]=useState(''); const [quantity,setQuantity]=useState(1)
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('products').select('*').order('id'); setProducts(data||[]) }
  async function add(e){ e.preventDefault(); if(!product) return alert('Seleccione producto'); await supabase.from('entries').insert([{ product_id: Number(product), quantity: Number(quantity) }]); await supabase.rpc('increment_stock', { pid: Number(product), qty: Number(quantity) }).catch(()=>{}); alert('Entrada registrada'); setProduct(''); setQuantity(1); load() }
  return (<div className="container"><h2>Entradas</h2><div className="card"><form onSubmit={add} className="center"><select value={product} onChange={e=>setProduct(e.target.value)}><option value=''>--Producto--</option>{products.map(p=>(<option key={p.id} value={p.id}>{p.name}</option>))}</select><input type="number" value={quantity} onChange={e=>setQuantity(e.target.value)}/><button type="submit">Registrar</button></form></div></div>)
}
