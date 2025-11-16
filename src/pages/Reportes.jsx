import React, {useEffect, useState} from 'react'
import { supabase } from '../lib/supabase'
export default function Reportes(){ const [total,setTotal]=useState(0); const [value,setValue]=useState(0); const [low,setLow]=useState([]);
 useEffect(()=>{ supabase.rpc('total_stock').then(r=>{ if(!r.error) setTotal(r.data) }); supabase.rpc('value_inventory').then(r=>{ if(!r.error) setValue(r.data) }); supabase.from('products').select('*').lt('stock_actual','stock_minimo').then(r=>{ if(!r.error) setLow(r.data) }) },[])
 return (<div><h1>Reportes</h1><div className='card-grid'><div className='card'><h3>Stock total</h3><p>{total}</p></div><div className='card'><h3>Valor inventario</h3><p>{value}</p></div><div className='card'><h3>Stock crítico</h3><p>{low.length} productos</p></div></div></div>) }
