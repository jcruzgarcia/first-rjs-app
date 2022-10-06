import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar">   
                <Link to='/'className="NavbarLogo">
                    <h1>Must Clothes</h1>
                </Link>
            </div>
            <div className='categories'>
                <Link to='/category/ropa' className='category'>Ropa</Link>
                <Link to='/category/accesorios'className='category'>Accesorios</Link>
                <Link to='/category/calzado' className='category'>Calzado</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar