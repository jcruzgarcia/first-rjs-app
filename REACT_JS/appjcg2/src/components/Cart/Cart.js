import { useContext } from 'react' 
import { Link } from "react-router-dom"
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Carrito</h1>
            { cart.map((product) => <CartItem key={product.id} {...product}/>) }
            <h3>Total a pagar: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default Cart