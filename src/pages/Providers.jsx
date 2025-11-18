import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Providers(){
  const [rows,setRows]=useState([])
  const [name,setName]=useState(''); const [contact,setContact]=useState('')
  useEffect(()=>fetch(),[])
  async function fetch(){
    const { data, error } = await supabase.from('providers').select('*').order('id')
    if(error) console.error(error)
    setRows(data||[])
  }
  async function create(){
    if(!name) return alert('Nombre requerido')
    const { error } = await supabase.from('providers').insert([{name, contact}])
    if(error) return alert(error.message)
    setName(''); setContact(''); fetch()
  }
  async function del(id){ if(!confirm('Eliminar?')) return; await supabase.from('providers').delete().eq('id',id); fetch() }
  return (<div><h2>Proveedores</h2>
    <div className='card form'>
      <label>Proveedor<input value={name} onChange={e=>setName(e.target.value)} /></label>
      <label>Contacto<input value={contact} onChange={e=>setContact(e.target.value)} /></label>
      <div style={{marginTop:8}}><button className='btn' onClick={create}>Crear</button></div>
    </div>
    <table className='table'><thead><tr><th>ID</th><th>Proveedor</th><th>Contacto</th><th></th></tr></thead>
    <tbody>{rows.map(c=>(<tr key={c.id}><td>{c.id}</td><td>{c.name}</td><td>{c.contact}</td><td><button className='btn small outline' onClick={()=>del(c.id)}>Eliminar</button></td></tr>))}</tbody></table>
  </div>)
}
