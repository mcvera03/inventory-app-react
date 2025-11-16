import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabase'
export default function Alertas(){ const [low,setLow]=useState([]); useEffect(()=>{ supabase.from('products').select('*').lt('stock_actual','stock_minimo').then(r=>{ if(!r.error) setLow(r.data) }) },[])
 return (<div><h1>Alertas y urgencias</h1><p>Productos con stock crítico:</p><table className='table'><thead><tr><th>ID</th><th>Nombre</th><th>Stock</th><th>Min</th></tr></thead><tbody>{low.map(p=>(<tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td style={{color:'red'}}>{p.stock_actual}</td><td>{p.stock_minimo}</td></tr>))}</tbody></table></div>) }
