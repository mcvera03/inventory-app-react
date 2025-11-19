import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Providers from './pages/Providers'
import Settings from './pages/Settings'
import Help from './pages/Help'
import Reports from './pages/Reports'
import ProtectedRoute from './components/ProtectedRoute'

export default function App(){
  return (
    <div className="app">
      <div style={{flex:1}}>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/productos" element={<ProtectedRoute><Products/></ProtectedRoute>} />
            <Route path="/categorias" element={<ProtectedRoute><Categories/></ProtectedRoute>} />
            <Route path="/proveedores" element={<ProtectedRoute><Providers/></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />
            <Route path="/help" element={<ProtectedRoute><Help/></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
