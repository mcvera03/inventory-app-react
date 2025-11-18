import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Table from '../components/Table'
import ProductForm from '../components/ProductForm'

export default function Products(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState(null)
  const [categories, setCategories] = useState([])
  const [providers, setProviders] = useState([])

  const columns = [
    { key:'id', title:'ID' }, { key:'name', title:'Nombre' }, { key:'code', title:'Código' },
    { key:'category_name', title:'Categoría' }, { key:'provider_name', title:'Proveedor' },
    { key:'stock', title:'Stock' }, { key:'price', title:'Precio' }
  ]

  useEffect(()=>{ fetchAll() }, [])

  async function fetchAll(){
    setLoading(true)
    const { data:cats } = await supabase.from('categories').select('*').order('id')
    const { data:provs } = await supabase.from('providers').select('*').order('id')
    const { data:prods } = await supabase.rpc('get_products_with_names') .catch(()=> null)
    // fallback if RPC not available: join client-side
    let productsData = []
    if(prods && prods.length) productsData = prods
    else {
      const { data } = await supabase.from('products').select('*').order('id')
      productsData = (data||[]).map(p=> ({
        ...p,
        category_name: cats?.find(c=>c.id===p.category_id)?.name || '',
        provider_name: provs?.find(pr=>pr.id===p.provider_id)?.name || ''
      }))
    }
    setCategories(cats||[])
    setProviders(provs||[])
    setProducts(productsData||[])
    setLoading(false)
  }

  async function createProduct(payload){
    const { data, error } = await supabase.from('products').insert([payload]).select().single()
    if(error){ return alert(error.message) }
    fetchAll()
    setShowForm(false)
  }

  async function updateProduct(payload){
    const { id, ...rest } = payload
    const { data, error } = await supabase.from('products').update(rest).eq('id', id).select().single()
    if(error){ return alert(error.message) }
    fetchAll()
    setEditing(null); setShowForm(false)
  }

  async function deleteProduct(id){
    if(!confirm('Eliminar producto?')) return
    const { error } = await supabase.from('products').delete().eq('id', id)
    if(error){ return alert(error.message) }
    fetchAll()
  }

  return (
    <div>
      <h2>Inventario</h2>
      <div style={{marginBottom:12}}>
        <button className="btn" onClick={()=>{ setShowForm(true); setEditing(null)}}>Agregar producto</button>
      </div>

      {showForm && (
        <ProductForm initial={editing||{}} onSave={(payload)=> editing ? updateProduct({id:editing.id, ...payload}) : createProduct(payload)} onCancel={()=>setShowForm(false)} categories={categories} providers={providers} />
      )}

      {loading ? <p>Cargando...</p> : <Table columns={columns} data={products} />}

      <div style={{marginTop:12}}>
        {products.map(p=> (
          <div key={p.id} className="row-actions">
            <strong>{p.name}</strong>
            <button className="btn small" onClick={()=>{ setEditing(p); setShowForm(true)}}>Editar</button>
            <button className="btn small outline" onClick={()=>deleteProduct(p.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  )
}
