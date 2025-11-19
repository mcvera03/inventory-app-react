import React from "react";

export default function Help() {
  const items = [
    {
      title: "Contactar soporte",
      img: "/contactar soporte.png",
    },
    {
      title: "Centro de ayuda",
      img: "/centro de ayuda.png",
    },
    {
      title: "Comenzar rápido",
      img: "/comenzar rapido.png",
    },
    {
      title: "Novedades",
      img: "/novedades.png",
    },
    {
      title: "Estado del sistema",
      img: "/estado del sistema.png",
    },
    {
      title: "Tutoriales",
      img: "/tutoriales.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center"> 
      <h2 className="text-4xl font-extrabold mb-10 uppercase text-gray-800">
        Ayuda y Soporte
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 p-5 border border-blue-200 rounded-xl shadow-lg bg-white hover:bg-blue-50 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer" 
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-16 h-16 object-contain"
            />
            <span className="text-xl font-semibold uppercase tracking-wider text-blue-800">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
