import React from 'react'
export default function Reports(){
  return (
    <div>
      <h2>Reportes</h2>
      <div className="grid">
        <div className="card">Inventario<br/>Stock actual</div>
        <div className="card">Financieros<br/>Valor inventario</div>
        <div className="card">Proveedores<br/>Tiempos entrega</div>
        <div className="card">Alertas</div>
      </div>
    </div>
  )
}