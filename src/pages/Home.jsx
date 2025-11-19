import React from "react";

export default function Home() {
  return (
    // Contenedor principal: usa flex-col e items-center para centrar el bloque horizontalmente
    <div className="flex flex-col items-center justify-center p-8 bg-white min-h-screen"> 
      
      {/* Nuevo contenedor de contenido: max-w-4xl (ancho limitado) y mx-auto (centrado) */}
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-8 uppercase text-gray-800">
          DESCRIPCIÓN DE LA EMPRESA
        </h2>

        {/* Cada <p> es un párrafo, el text-center del div padre los centra */}
        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          Nuestra empresa se dedica al desarrollo e implementación de soluciones
          tecnológicas para la gestión integral de inventarios.
        </p>

        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          Ofrecemos herramientas diseñadas para optimizar los procesos de control, almacenamiento y
          distribución de productos, garantizando precisión, eficiencia y trazabilidad
          en cada etapa de la cadena de suministro.
        </p>

        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          A través de una plataforma moderna, segura y adaptable a distintos sectores,
          ayudamos a las organizaciones a mejorar la toma de decisiones operativas,
          reducir costos logísticos y mantener una administración de inventario
          confiable y transparente.
        </p>

        <p className="mb-10 text-xl font-medium text-blue-700 leading-relaxed">
          Nuestro compromiso es impulsar la excelencia operativa mediante la innovación y la tecnología.
        </p>

        {/* La imagen ya se centra porque el contenedor principal es text-center */}
        <img
          src="/principal.png"
          alt="Imagen principal"
          className="w-[300px] h-auto mx-auto"
        />

      </div> {/* <-- FIN del contenedor max-w-4xl mx-auto */}
    </div>
  );
}
