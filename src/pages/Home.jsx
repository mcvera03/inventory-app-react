import React from "react";
import logo from "/principal.png"; // esta imagen es la que tú llamas "PRINCIPAL"

export default function Home() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", padding: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#ffffff",
            background: "black",
            padding: "15px 40px",
            borderRadius: "10px",
            WebkitTextStroke: "0.5px black",
          }}
        >
          INVENTORY MANAGEMENT
        </h1>

        <img
          src={logo}
          alt="Logo"
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
          }}
        />
      </div>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "20px",
          lineHeight: "1.7",
          color: "#000000",
          textAlign: "justify",
          fontWeight: "normal",
        }}
      >
        Nuestra empresa se dedica al desarrollo e implementación de soluciones
        tecnológicas para la gestión integral de inventarios. Ofrecemos
        herramientas diseñadas para optimizar los procesos de control,
        almacenamiento y distribución de productos, garantizando precisión,
        eficiencia y trazabilidad en cada etapa de la cadena de suministro.
        <br />
        <br />
        A través de una plataforma moderna, segura y adaptable a distintos
        sectores, ayudamos a las organizaciones a mejorar la toma de decisiones
        operativas, reducir costos logísticos y mantener una administración de
        inventario confiable y transparente. Nuestro compromiso es impulsar la
        excelencia operativa mediante la innovación y la tecnología.
      </p>
    </div>
  );
}
