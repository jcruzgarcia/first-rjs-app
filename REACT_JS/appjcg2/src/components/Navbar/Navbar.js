import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar">   
                <Link to='/'className="NavbarLogo">
                    <h1>Must Clothes</h1>
                </Link>
            </div>
            <div className='categories'>
                <NavLink to='/category/ropa' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ropa</NavLink>
                <NavLink to='/category/accesorios'className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to='/category/calzado' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Calzado</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar