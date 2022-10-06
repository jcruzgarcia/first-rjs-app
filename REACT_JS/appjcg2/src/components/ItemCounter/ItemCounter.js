import { useState } from 'react'
import './ItemCounter.css'

const ItemCounter = () => {
    const initial = 1
    let stock = 12

    const handleOnAdd = () => console.log(`${count} unidad/es agregada/s al carrito`);

    const [count, setCount] = useState(initial)

    const decrement = () => {

        if(count > 1) {
            setCount(count - 1)
        } else{
            setCount(initial)
        }
    }

    const increment = () => {
        setCount(count + 1)

        if(count >= stock) {
            setCount(stock)
        }
    }

    return (
        <div className="ItemCounter">
            <button className='ItemCounterButton' onClick={increment}>+</button>
            <h3>{count}</h3>
            <button className='ItemCounterButton' onClick={decrement}>-</button>
            <p>Últimas {stock} unidades</p>
            <button className='ItemCounterButton' onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCounter