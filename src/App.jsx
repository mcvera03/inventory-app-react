import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Providers from './pages/Providers'
import Reports from './pages/Reports'
import Help from './pages/Help'
import Config from './pages/Config'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App(){
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/productos' element={<Products/>} />
          <Route path='/categorias' element={<Categories/>} />
          <Route path='/proveedores' element={<Providers/>} />
          <Route path='/reportes' element={<Reports/>} />
          <Route path='/ayuda' element={<Help/>} />
          <Route path='/configuracion' element={<Config/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </div>
    </div>
  )
}