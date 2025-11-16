import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Productos from './pages/Productos'
import Categorias from './pages/Categorias'
import Proveedores from './pages/Proveedores'
import Reportes from './pages/Reportes'
import Alertas from './pages/Alertas'
import Configuracion from './pages/Configuracion'
import Ayuda from './pages/Ayuda'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

export default function App(){
  return (
    <div>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/productos" element={<ProtectedRoute><Productos/></ProtectedRoute>}/>
          <Route path="/categorias" element={<ProtectedRoute><Categorias/></ProtectedRoute>}/>
          <Route path="/proveedores" element={<ProtectedRoute><Proveedores/></ProtectedRoute>}/>
          <Route path="/reportes" element={<ProtectedRoute><Reportes/></ProtectedRoute>}/>
          <Route path="/alertas" element={<ProtectedRoute><Alertas/></ProtectedRoute>}/>
          <Route path="/configuracion" element={<ProtectedRoute><Configuracion/></ProtectedRoute>}/>
          <Route path="/ayuda" element={<ProtectedRoute><Ayuda/></ProtectedRoute>}/>
          <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
      </main>
    </div>
  )
}
