import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white min-h-screen">

      <h2 className="text-3xl font-bold mb-6">DESCRIPCIÓN DE LA EMPRESA</h2>

      <p className="max-w-4xl text-gray-700 mb-10 leading-relaxed text-center">
        Nuestra empresa se dedica al desarrollo e implementación de soluciones
        tecnológicas para la gestión integral de inventarios.
        <br /><br />
        Ofrecemos herramientas diseñadas para optimizar los procesos de control, almacenamiento y
        distribución de productos, 
        <br /><br />
        garantizando precisión, eficiencia y trazabilidad
        en cada etapa de la cadena de suministro.
        <br /><br />
        A través de una plataforma moderna, segura y adaptable a distintos sectores,
        ayudamos a las organizaciones a mejorar la toma 
        <br /><br />
        de decisiones operativas,
        reducir costos logísticos y mantener una administración de inventario
        confiable y transparente. 
        <br /><br />
        Nuestro compromiso es impulsar la excelencia
        operativa mediante la innovación y la tecnología.
      </p>

      <img
   src="/principal.svg"
        alt="Imagen principal"
        className="w-[300px] h-auto mx-auto mb-6"
      />

    </div>
  );
}
