import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Categories from './pages/Categories.jsx'
import Providers from './pages/Providers.jsx'
import Reports from './pages/Reports.jsx'
import Alerts from './pages/Alerts.jsx'
import Config from './pages/Config.jsx'
import Help from './pages/Help.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Reset from './pages/Reset.jsx'
import { supabase } from './lib/supabaseClient'

function Protected({children}){
  const user = supabase.auth.getUser ? null : null // placeholder for SSR; actual check in Navbar + pages
  const session = supabase.auth.session ? supabase.auth.session() : null
  // We'll rely on client redirects in pages for simplicity
  return children
}

export default function App(){
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/config" element={<Config />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </main>
    </div>
  )
}
