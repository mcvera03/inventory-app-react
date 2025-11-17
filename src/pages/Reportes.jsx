import React, {useEffect,useState} from 'react'
import { supabase } from '../lib/supabaseClient'
export default function Reportes(){
  const [movs,setMovs]=useState([])
  useEffect(()=>load(),[])
  async function load(){ const { data } = await supabase.from('movements').select('*').order('created_at', { ascending:false }).limit(50); setMovs(data||[]) }
  return (<div className="container"><h2>Reportes</h2><div className="card"><p>Últimos movimientos:</p><ul>{movs.map(m=>(<li key={m.id}>{m.type} - producto {m.product_id} - {m.quantity} ({new Date(m.created_at).toLocaleString()})</li>))}</ul></div></div>)
}
