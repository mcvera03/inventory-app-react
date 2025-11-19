import React, { useState } from "react";
import { FaQuestionCircle, FaTools, FaEnvelope, FaBug } from "react-icons/fa";

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo restablezco mi contraseña?",
      answer:
        "Puedes restablecerla desde el menú de inicio de sesión seleccionando 'Olvidé mi contraseña'. Se enviará un correo a tu cuenta registrada.",
    },
    {
      question: "¿Cómo registro un nuevo producto?",
      answer:
        "En el menú superior ve a 'Producto' → 'Agregar producto'. Completa la información requerida y guarda los cambios.",
    },
    {
      question: "¿Por qué no puedo ver el inventario?",
      answer:
        "Necesitas haber iniciado sesión y contar con permisos de usuario. Consulta con tu administrador si necesitas acceso adicional.",
    },
    {
      question: "¿Cómo puedo reportar un problema técnico?",
      answer:
        "Utiliza el formulario de soporte para enviar detalles del error. Nuestro equipo se comunicará contigo en menos de 24 horas.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Centro de Ayuda y Soporte</h1>

      <p className="max-w-3xl text-gray-600 text-center mb-10">
        Aquí encontrarás respuestas a las preguntas más frecuentes, guías rápidas
        y opciones de soporte técnico relacionadas con el sistema de gestión de
        inventarios.
      </p>

      {/* FAQ SECTION */}
      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaQuestionCircle /> Preguntas Frecuentes (FAQ)
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg mb-3 shadow-sm bg-gray-50"
          >
            <button
              className="w-full text-left p-4 font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SUPPORT SECTION */}
      <div className="w-full max-w-3xl mt-12">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaTools /> Soporte Técnico
        </h2>

        <p className="text-gray-700 mb-3">
          Si necesitas asistencia personalizada, puedes contactar directamente
          con nuestro equipo técnico.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center gap-2">
            <FaEnvelope /> Correo: soporte@inventorysystem.com
          </li>
          <li className="flex items-center gap-2">
            <FaBug /> Reportar un problema: soporte@inventorysystem.com
          </li>
          <li className="flex items-center gap-2">
            📞 Teléfono: +52 555 123 4567
          </li>
          <li className="flex items-center gap-2">
            🕒 Horario: Lunes a Viernes, 9:00 AM – 6:00 PM
          </li>
        </ul>
      </div>

      {/* CONTACT FORM PLACEHOLDER */}
      <div className="w-full max-w-3xl mt-12 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Enviar una Solicitud</h2>
        <p className="text-gray-700 mb-4">
          (Formulario no implementado — placeholder visual)
        </p>

        <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition">
          Enviar solicitud
        </button>
      </div>
    </div>
  );
}
