import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Producto from './pages/Producto'
import Categoria from './pages/Categoria'
import Proveedores from './pages/Proveedores'
import Reportes from './pages/Reportes'
import Configuracion from './pages/Configuracion'
import Ayuda from './pages/Ayuda'
import Nav from './components/Nav'

export default function App(){
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/producto" element={<Producto/>} />
        <Route path="/categoria" element={<Categoria/>} />
        <Route path="/proveedores" element={<Proveedores/>} />
        <Route path="/reportes" element={<Reportes/>} />
        <Route path="/configuracion" element={<Configuracion/>} />
        <Route path="/ayuda" element={<Ayuda/>} />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
    </>
  )
}
