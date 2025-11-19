import React, {useEffect, useState} from 'react'
import { supabase } from '../lib_supabase'

export default function Categories(){
  const [cats,setCats]=useState([])
  const [name,setName]=useState('')
  // CORRECCIÓN 1: Cambiamos 'des' por 'description'
  const [description,setDescription]=useState('')

  useEffect(()=>{ fetchCats() },[])

  async function fetchCats(){
    const { data } = await supabase.from('categories').select('*').order('id',{ascending:false})
    setCats(data||[])
  }

  async function createCat(e){
    e.preventDefault()
    // CORRECCIÓN 2: Cambiamos 'des' a 'description' en el objeto de inserción
    const { error } = await supabase.from('categories').insert({ name, description })
    
    if(error) return alert(error.message)
    setName(''); 
    // CORRECCIÓN 3: Limpiamos el nuevo estado 'description'
    setDescription('') 
    fetchCats()
  }

  async function del(id){
    if(!confirm('Eliminar?')) return
    await supabase.from('categories').delete().eq('id',id)
    fetchCats()
  }

  return (
    <div className="container">
      <h2>Categorías</h2>
      <form onSubmit={createCat} style={{marginBottom:20}}>
        <input className="input" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)}/>
        {/* CORRECCIÓN 4: Usamos el estado 'description' y su setter */}
        <input className="input" placeholder="Descripción" value={description} onChange={e=>setDescription(e.target.value)}/>
        <button className="button" type="submit">Agregar categoría</button>
      </form>

      <table className="table">
        <thead><tr><th>ID</th><th>Nombre</th><th>Des</th><th>Acciones</th></tr></thead>
        <tbody>
          {cats.map(c=>(
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              {/* CORRECCIÓN 5: Usamos c.description para mostrar el valor */}
              <td>{c.description}</td>
              <td><button className="button" onClick={()=>del(c.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
