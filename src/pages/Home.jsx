import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Home(){
  const [totals,setTotals]=useState({})
  useEffect(()=>{ async function load(){
    const { data: p } = await supabase.from('products').select('id').then(r=>r).catch(()=>({data:[]}))
    const { data: c } = await supabase.from('categories').select('id').then(r=>r).catch(()=>({data:[]}))
    const { data: prov } = await supabase.from('providers').select('id').then(r=>r).catch(()=>({data:[]}))
    setTotals({products:p?.length||0,categories:c?.length||0,providers:prov?.length||0})
  } load()},[])
  return (<div className="container"><div className="card"><h1 style={{color:'var(--primary)'}}>Inventory Dashboard</h1>
    <p>Resumen rápido:</p>
    <ul>
      <li>Productos: {totals.products}</li>
      <li>Categorías: {totals.categories}</li>
      <li>Proveedores: {totals.providers}</li>
    </ul>
  </div></div>)
}
