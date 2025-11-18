import React from 'react'
export default function Home(){
  return (
    <div>
      <h2>Descripción de la empresa</h2>
      <p>Bienvenido al sistema de inventario. Aquí puedes navegar a las secciones principales.</p>
      <div className="cards">
        <div className="card">
          <img src="/images/inventario.png" style={{width:48}} alt="inv"/>
          <h3>Inventario</h3>
        </div>
        <div className="card">
          <img src="/images/proovedores.png" style={{width:48}} alt="prov"/>
          <h3>Proveedores</h3>
        </div>
        <div className="card">
          <img src="/images/financieros.png" style={{width:48}} alt="fin"/>
          <h3>Financieros</h3>
        </div>
      </div>
    </div>
  )
}
