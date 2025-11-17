import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Inventario from './pages/Inventario'
import Entradas from './pages/Entradas'
import Salidas from './pages/Salidas'
import Categorias from './pages/Categorias'
import Proveedores from './pages/Proveedores'
import Usuarios from './pages/Usuarios'
import Reportes from './pages/Reportes'

export default function App(){
  return (<>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/inventario" element={<Inventario/>}/>
      <Route path="/entradas" element={<Entradas/>}/>
      <Route path="/salidas" element={<Salidas/>}/>
      <Route path="/categorias" element={<Categorias/>}/>
      <Route path="/proveedores" element={<Proveedores/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
      <Route path="/reportes" element={<Reportes/>}/>
      <Route path="*" element={<Navigate to='/'/>}/>
    </Routes>
  </>)
}
