import React, {useEffect, useState} from 'react'
import { supabase } from '../../lib/supabase'
export default function ProductForm({product,onClose,onSaved}){
  const [code,setCode]=useState(product?.code||'')
  const [name,setName]=useState(product?.name||'')
  const [stock,setStock]=useState(product?.stock_actual||0)
  const [price,setPrice]=useState(product?.precio_unitario||'')
  useEffect(()=>{},[])
  const save=async(e)=>{ e.preventDefault(); const payload={code,name,stock_actual:parseInt(stock||0),precio_unitario:price?parseFloat(price):null}; if(product){ const {error}=await supabase.from('products').update(payload).eq('id',product.id); if(error) return alert(error.message);} else{ const {error}=await supabase.from('products').insert(payload); if(error) return alert(error.message);} onSaved&&onSaved(); onClose(); }
  return (<div className='modal-overlay'><form className='modal' onSubmit={save}><h3>{product?'Editar':'Agregar'} producto</h3><input className='input' value={code} onChange={e=>setCode(e.target.value)} placeholder='Código'/><input className='input' value={name} onChange={e=>setName(e.target.value)} placeholder='Nombre'/><input className='input' type='number' value={stock} onChange={e=>setStock(e.target.value)} placeholder='Stock'/><input className='input' value={price} onChange={e=>setPrice(e.target.value)} placeholder='Precio'/><div style={{textAlign:'right'}}><button className='button' type='submit'>Guardar</button> <button type='button' onClick={onClose}>Cancelar</button></div></form></div>) }
