import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from "../../notification/Notification"
import Button from '../Button/Button'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: `${CheckoutForm.name}`,
                    phone: `${CheckoutForm.phone}`,
                    email: `${CheckoutForm.email}`
                },
                items: cart,
                total
            }

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                setNotification(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                setNotification('Hay productos fuera de stock')
            }
        } catch (error) {
            setError(error)
            setNotification('Ha ocurrido un error')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }
    if(error) {
        return <h1>Ha ocurrido un error, inténtelo de nuevo</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            <CheckoutForm/>
            <Button className="Button" onClick={createOrder}>Generar orden de compra</Button>
            
        </>
    )
}

export default Checkout
