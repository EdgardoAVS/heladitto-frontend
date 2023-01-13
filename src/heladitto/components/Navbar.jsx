import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='bg-slate-100 py-3'>
      <ul className='flex gap-3 px-4'>
        <li>
          <Link className='py-3' to='/main/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link className='py-3' to='/main/vender'>
            Vender
          </Link>
        </li>
        <li>
          <Link className='py-3' to='/main/orders'>
            Ventas
          </Link>
        </li>
      </ul>
    </nav>
  )
}
