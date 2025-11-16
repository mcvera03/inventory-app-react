import React from 'react'

export default function Reports(){
  return (
    <div>
      <h2>Reportes</h2>
      <div className="grid">
        <div className="card">Inventario<br/>Stock actual, movimientos</div>
        <div className="card">Financieros<br/>Valor, costos</div>
        <div className="card">Proveedores<br/>Tiempos de entrega</div>
        <div className="card">Alertas<br/>Productos lentos</div>
      </div>
    </div>
  )
}