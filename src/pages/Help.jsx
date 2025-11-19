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
      <h2 className="text-2xl font-bold mb-6">Ayuda y Soporte</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img src={item.img} alt={item.title} className="w-14 h-14" />
            <span className="text-gray-700 text-lg">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
