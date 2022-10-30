import './CartWidget.css'
import cart from './assets/cart.png'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {


    const { getTotalQuantity } = useContext(CartContext)
    
    const totalQuantity = getTotalQuantity()

    if(totalQuantity === 0) return
    
    return (
       <Link to='/cart' className='CartWidget'>
        <div style={{ display: 'flex', padding:'20px'}}>
            <img src={cart} alt='cart' className='cartImg'/>
            {totalQuantity}
        </div>
        </Link>
    )
}

export default CartWidget