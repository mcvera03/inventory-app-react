import React, {useEffect, useState} from 'react'
import { supabase } from '../lib_supabase'

export default function Providers(){
  const [data,setData]=useState([])
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');

  useEffect(()=> fetchAll(),[])

  async function fetchAll(){
    const { data } = await supabase.from('providers').select('*').order('id',{ascending:false})
    setData(data||[])
  }

  async function create(e){
    e.preventDefault()
    await supabase.from('providers').insert({ name, phone, email, address })
    setName(''); setPhone(''); setEmail(''); setAddress('')
    fetchAll()
  }

  async function del(id){
    if(!confirm('Eliminar?')) return
    await supabase.from('providers').delete().eq('id',id)
    fetchAll()
  }

  return (
    <div className="container">
      <h2>Proveedores</h2>
      <form onSubmit={create} style={{marginBottom:20}}>
        <input className="input" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)}/>
        <input className="input" placeholder="Telefono" value={phone} onChange={e=>setPhone(e.target.value)}/>
        <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input className="input" placeholder="Direccion" value={address} onChange={e=>setAddress(e.target.value)}/>
        <button className="button" type="submit">Agregar proveedor</button>
      </form>

      <table className="table">
        <thead><tr><th>ID</th><th>Nombre</th><th>Contacto</th><th>Acciones</th></tr></thead>
        <tbody>
          {data.map(d=>(
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email || d.phone}</td>
              <td><button className="button" onClick={()=>del(d.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
