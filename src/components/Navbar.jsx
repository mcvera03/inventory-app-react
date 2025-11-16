import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Navbar() {
  const nav = useNavigate()

  const logout = async () => {
    await supabase.auth.signOut()
    nav('/')
  }

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <Link to='/' className='brand'>Inventory Management</Link>
      </div>

      <div className='nav-center'>
        <Link to='/productos' className='pill'>Producto</Link>
        <Link to='/categorias' className='pill'>Categorias</Link>
        <Link to='/proveedores' className='pill'>Proveedores</Link>
        <Link to='/reportes' className='pill'>Reportes</Link>
        <Link to='/alertas' className='pill'>Alertas</Link>
      </div>

      <div className='nav-right'>
        <Link to='/login'>Iniciar sesión</Link>
        <Link to='/signup'>Crear cuenta</Link>
        <button onClick={logout} className='link-btn'>Salir</button>
      </div>
    </nav>
  )
}
