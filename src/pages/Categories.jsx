import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Categories(){
  const [cats,setCats]=useState([])
  const [name,setName]=useState(''); const [desc,setDesc]=useState('')
  useEffect(()=>fetchCats(),[])
  async function fetchCats(){
    const { data, error } = await supabase.from('categories').select('*').order('id')
    if(error) return console.error(error)
    setCats(data||[])
  }
  async function create(){
    if(!name) return alert('Nombre requerido')
    const { error } = await supabase.from('categories').insert([{name, description:desc}])
    if(error) return alert(error.message)
    setName(''); setDesc(''); fetchCats()
  }
  async function del(id){ if(!confirm('Eliminar?')) return; await supabase.from('categories').delete().eq('id',id); fetchCats() }
  return (<div><h2>Categorías</h2>
    <div className='card form'>
      <label>Nombre<input value={name} onChange={e=>setName(e.target.value)} /></label>
      <label>Descripción<input value={desc} onChange={e=>setDesc(e.target.value)} /></label>
      <div style={{marginTop:8}}><button className='btn' onClick={create}>Crear</button></div>
    </div>
    <table className='table'><thead><tr><th>ID</th><th>Nombre</th><th>Des</th><th></th></tr></thead>
    <tbody>{cats.map(c=>(<tr key={c.id}><td>{c.id}</td><td>{c.name}</td><td>{c.description}</td><td><button className='btn small outline' onClick={()=>del(c.id)}>Eliminar</button></td></tr>))}</tbody></table>
  </div>)
}
