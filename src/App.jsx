import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Productos from './pages/Productos'
import Categorias from './pages/Categorias'
import Proveedores from './pages/Proveedores'
import Reportes from './pages/Reportes'
import Usuario from './pages/Usuario'
import Configuracion from './pages/Configuracion'
import Ayuda from './pages/Ayuda'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div>
      <Navbar/>
      <main style={{padding:20}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/proveedores" element={<Proveedores/>}/>
          <Route path="/reportes" element={<Reportes/>}/>
          <Route path="/usuario" element={<Usuario/>}/>
          <Route path="/configuracion" element={<Configuracion/>}/>
          <Route path="/ayuda" element={<Ayuda/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </main>
    </div>
  )
}
