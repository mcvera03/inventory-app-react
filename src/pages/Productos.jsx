import React, {useEffect, useState} from 'react'
import { supabase } from '../services/supabaseClient'

export default function Productos(){
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)

  const fetchProducts = async ()=>{
    setLoading(true)
    const { data, error } = await supabase.from('products').select('*').order('id',{ascending:false})
    if(error){ alert(error.message); setLoading(false); return; }
    setProducts(data)
    setLoading(false)
  }

  useEffect(()=>{ fetchProducts() },[])

  const handleDelete = async (id) => {
    if(!confirm('Eliminar producto?')) return
    const { error } = await supabase.from('products').delete().eq('id', id)
    if(error) return alert(error.message)
    fetchProducts()
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h1>Producto</h1>
        <div>
          <input className="big-search" placeholder="Buscar producto..." />
          <button style={{marginLeft:12}} className="button">Agregar producto</button>
        </div>
      </div>

      {loading ? <p>Cargando...</p> : (
        <table className="table">
          <thead><tr><th>ID</th><th>Código</th><th>Nombre</th><th>Stock</th><th>Precio</th><th>Acciones</th></tr></thead>
          <tbody>
            {products.map(p=>(
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.code}</td>
                <td>{p.name}</td>
                <td>{p.stock_actual}</td>
                <td>{p.precio_unitario}</td>
                <td>
                  <button className="button">Editar</button>
                  <button style={{marginLeft:8}} onClick={()=>handleDelete(p.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
