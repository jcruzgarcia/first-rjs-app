import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1 style={{padding: '20px'}}>Must Clothes</h1>
            </div>
            <div style={{padding: '10px'}}>
                <Button label={'Ropa'}/>
                <Button label={'Calzado'}/>
                <Button label={'Accesorios'}/>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar