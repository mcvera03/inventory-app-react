import React, {useEffect, useState} from 'react'
import { supabase } from '../lib_supabase'

export default function Products(){
  // ... (Estados sin cambios)
  const [products,setProducts]=useState([])
  const [name,setName]=useState('')
  const [stock,setStock]=useState(0)
  const [price,setPrice]=useState(0)
  const [categories,setCategories]=useState([])
  const [providers,setProviders]=useState([])
  const [category,setCategory]=useState('')
  const [provider,setProvider]=useState('')

  useEffect(()=>{ fetchAll() },[])

  async function fetchAll(){
    const { data: products } = await supabase.from('products').select('*').order('id', {ascending:false})
    setProducts(products || [])
    const { data: cats } = await supabase.from('categories').select('*')
    setCategories(cats || [])
    const { data: provs } = await supabase.from('providers').select('*')
    setProviders(provs || [])
  }

  async function createProduct(e){
    e.preventDefault()
    // CORRECCIÓN: Se asume que las columnas son 'category_id' y 'provider_id'
    const { error } = await supabase.from('products').insert({ 
      name, 
      stock: parseInt(stock), 
      price: parseFloat(price), 
      category_id: category || null, // <-- CORREGIDO
      provider_id: provider || null // <-- CORREGIDO
    })
    if(error) return alert(error.message)
    setName(''); setStock(0); setPrice(0); setCategory(''); setProvider('')
    fetchAll()
  }

  async function remove(id){
    if(!confirm('Eliminar?')) return
    await supabase.from('products').delete().eq('id',id)
    fetchAll()
  }

  return (
    <div className="container">
      <h2>Productos</h2>
      <form onSubmit={createProduct} style={{marginBottom:20}}>
        {/* ... (Inputs sin cambios) */}
        <input className="input" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)}/>
        <input className="input" placeholder="Stock" type="number" value={stock} onChange={e=>setStock(e.target.value)}/>
        <input className="input" placeholder="Precio" type="number" step="0.01" value={price} onChange={e=>setPrice(e.target.value)}/>
        <select className="input" value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">--Categoria--</option>
          {categories.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select className="input" value={provider} onChange={e=>setProvider(e.target.value)}>
          <option value="">--Proveedor--</option>
          {providers.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <button className="button" type="submit">Agregar producto</button>
      </form>

      <table className="table">
        <thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Precio</th><th>Categoria</th><th>Proveedor</th><th>Acciones</th></tr></thead>
        <tbody>
          {products.map(p=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>{p.price}</td>
              {/* CORRECCIÓN: Usamos el nombre de columna corregido */}
              <td>{p.category_id}</td> 
              <td>{p.provider_id}</td> 
              <td className="row-actions"><button onClick={()=>remove(p.id)} className="button">Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
