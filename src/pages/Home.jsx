import React from 'react'
import logo from '../../public/principal.png'

export default function Home(){
  return (
    <div className="center">
      <img src="/principal.png" alt="logo" className="logo" />
      <h3 style={{textAlign:'left',marginLeft:'6%'}}>Descripción de la empresa</h3>
      <div style={{maxWidth:900, margin:'10px auto', textAlign:'center'}}>
        <p style={{lineHeight:1.6}}>
          Nuestra empresa se dedica al desarrollo e implementación de soluciones tecnológicas para la gestión integral de inventarios. Ofrecemos herramientas diseñadas para optimizar los procesos de control, almacenamiento y distribución de productos, garantizando precisión, eficiencia y trazabilidad en cada etapa de la cadena de suministro.
        </p>
        <p style={{lineHeight:1.6}}>
          A través de una plataforma moderna, segura y adaptable a distintos sectores, ayudamos a las organizaciones a mejorar la toma de decisiones operativas, reducir costos logísticos y mantener una administración de inventario confiable y transparente. Nuestro compromiso es impulsar la excelencia operativa mediante la innovación y la tecnología.
        </p>
      </div>
    </div>
  )
}