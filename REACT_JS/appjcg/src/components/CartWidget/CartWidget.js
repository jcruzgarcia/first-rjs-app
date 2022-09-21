import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <div
            style={{ display: 'flex', padding:'20px'}}>
            <img src={cart} alt='cart' />
            10
        </div>
    )
}

export default CartWidget