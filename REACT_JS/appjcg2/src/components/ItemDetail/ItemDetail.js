import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCounter from '../ItemCounter/ItemCounter'
import { NotificationContext } from '../../notification/Notification'

const ItemDetail = ({ product, stock, name, id, price }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification(`${quantity} ${product.name} se agregó al carrito `)
    }

    const productAddedQuantity = getProductQuantity(id)


    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: {product?.price}
                </p> 
                <p className="Info">
                    Descripción: {product?.description}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCounter onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail