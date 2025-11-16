import React from 'react'

export default function Reportes(){
  return (
    <div>
      <h1>Reportes</h1>
      <div className="card-grid">
        <div className="card">
          <h3>INVENTARIO</h3>
          <p>Stock actual<br/>Movimientos diarios<br/>Análisis de rotación</p>
        </div>
        <div className="card">
          <h3>FINANCIEROS</h3>
          <p>Valor inventario<br/>Costos promedio<br/>Margen de utilidad</p>
        </div>
        <div className="card">
          <h3>PROVEEDORES</h3>
          <p>Evaluación<br/>Tiempos de entrega<br/>Comparativa</p>
        </div>
        <div className="card">
          <h3>ALERTAS Y URGENCIAS</h3>
          <p>Stock crítico<br/>Productos lentos<br/>Vencimientos</p>
        </div>
      </div>
    </div>
  )
}
