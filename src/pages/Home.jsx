import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link } from 'react-router-dom'

export default function Home(){
  const [counts,setCounts]=useState({products:0,categories:0,providers:0})
  useEffect(()=>{
    async function load(){
      const { count: p } = await supabase.from('products').select('*', { count: 'exact' })
      const { count: c } = await supabase.from('categories').select('*', { count: 'exact' })
      const { count: prov } = await supabase.from('providers').select('*', { count: 'exact' })
      setCounts({ products: p||0, categories: c||0, providers: prov||0 })
    }
    load()
  },[])
  return (
    <div>
      <div style={{textAlign:'center'}}>
        <img src="/principal.png" alt="principal" style={{height:120}}/>
        <h2 style={{textAlign:'left',marginLeft:'6%'}}>Descripción de la empresa</h2>
        <p style={{maxWidth:900,margin:'8px auto',lineHeight:1.6}}>Nuestra empresa se dedica al desarrollo e implementación de soluciones tecnológicas para la gestión integral de inventarios. Ofrecemos herramientas diseñadas para optimizar los procesos de control, almacenamiento y distribución de productos, garantizando precisión, eficiencia y trazabilidad en cada etapa de la cadena de suministro.</p>
      </div>

      <div className="grid" style={{marginTop:24}}>
        <div className="card">
          <img src="/inventario.png" style={{height:56}} alt="inv"/>
          <h3>Productos</h3>
          <p style={{fontSize:20}}>{counts.products}</p>
          <Link to="/productos">Ver</Link>
        </div>
        <div className="card">
          <img src="/proovedores.png" style={{height:56}} alt="prov"/>
          <h3>Proveedores</h3>
          <p style={{fontSize:20}}>{counts.providers}</p>
          <Link to="/proveedores">Ver</Link>
        </div>
        <div className="card">
          <img src="/financieros.png" style={{height:56}} alt="fin"/>
          <h3>Reportes</h3>
          <Link to="/reportes">Ver</Link>
        </div>
      </div>
    </div>
  )
}