import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 text-center bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Descripción de la empresa</h2>

      <p className="max-w-3xl text-gray-700 mb-10 leading-relaxed">
        Nuestra empresa se dedica al desarrollo e implementación de soluciones
        tecnológicas para la gestión integral de inventarios. Ofrecemos
        herramientas diseñadas para optimizar los procesos de control,
        almacenamiento y distribución de productos, garantizando precisión,
        eficiencia y trazabilidad en cada etapa de la cadena de suministro.
        <br /><br />
        A través de una plataforma moderna, segura y adaptable a distintos
        sectores, ayudamos a las organizaciones a mejorar la toma de decisiones
        operativas, reducir costos logísticos y mantener una administración de
        inventario confiable y transparente. Nuestro compromiso es impulsar la
        excelencia operativa mediante la innovación y la tecnología.
      </p>

      <img
        src="/principal.svg"
        alt="Imagen principal"
        className="w-80 h-auto mb-8"
      />
    </div>
  );
}
