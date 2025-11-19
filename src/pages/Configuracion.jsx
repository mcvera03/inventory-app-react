import React from "react";

const items = [
  { label: "Seguridad", icon: "/seguridad.png" },
  { label: "Usuario", icon: "/usuario.png" },
  { label: "Inventario", icon: "/inventario1.png" },
  { label: "Productos", icon: "/productos.png" },
  { label: "Almacenes", icon: "/almacenes.png" },
  { label: "Empresa", icon: "/empresa.png" },
  { label: "Notificaciones", icon: "/notificaciones.png" },
];

export default function Configuracion() { // <--- Asegura que el nombre de la función coincide con el nombre del archivo
  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 uppercase text-gray-800">
        Configuración
      </h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-5 border border-gray-300 rounded-2xl shadow-lg bg-gray-50 hover:bg-gray-100 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
          >
            <img 
              src={item.icon} 
              alt={item.label} 
              className="w-14 h-14 object-contain"
              style={{ filter: 'grayscale(0%)' }}
            />
            <span className="text-xl font-semibold uppercase tracking-wider text-gray-700">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
