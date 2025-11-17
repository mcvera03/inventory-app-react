import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabase'

export default function Products(){
  const [items, setItems] = useState([])
  const [name,setName]=useState('')
  const [qty,setQty]=useState(1)

  const fetch = async ()=>{
    const { data } = await supabase.from('products').select('*').order('id', {ascending:false})
    setItems(data || [])
  }
  useEffect(()=>{ fetch() },[])

  const add = async (e)=>{
    e.preventDefault()
    await supabase.from('products').insert([{ name, quantity: qty }])
    setName(''); setQty(1); fetch()
  }
  const remove = async (id)=>{
    await supabase.from('products').delete().eq('id', id)
    fetch()
  }

  return (
    <div className='container'>
      <h2>Productos</h2>
      <form onSubmit={add} className='form-inline'>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder='Nombre' required/>
        <input type='number' min='1' value={qty} onChange={e=>setQty(Number(e.target.value))} required/>
        <button type='submit'>Agregar</button>
      </form>
      <ul className='list'>
        {items.map(it=> (<li key={it.id}>{it.name} — {it.quantity} <button onClick={()=>remove(it.id)}>Eliminar</button></li>))}
      </ul>
    </div>
  )
}
