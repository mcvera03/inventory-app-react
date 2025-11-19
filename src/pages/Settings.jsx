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

export default function Config() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-10">Configuración</h2>

      <div className="max-w-xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <img src={item.icon} alt={item.label} className="w-12 h-12" />
            <span className="text-xl font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
