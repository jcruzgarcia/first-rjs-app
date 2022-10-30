import { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = ({stock = 12, initial = 1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const decrement = () => {

        if(quantity > 1) {
            setQuantity(quantity - 1)
        } else{
            setQuantity(initial)
        }
    }

    const increment = () => {
        setQuantity(quantity + 1)

        if(quantity >= stock) {
            setQuantity(stock)
        }
    }

    return (
        <div className="ItemCounter">
            <button className='ItemCounterButton' onClick={increment}>+</button>
            <h3>{quantity}</h3>
            <button className='ItemCounterButton' onClick={decrement}>-</button>
            <p>Últimas {stock} unidades</p>
            <button className='ItemCounterButton' onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter