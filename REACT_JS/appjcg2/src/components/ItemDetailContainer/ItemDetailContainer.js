import { useState,useEffect, useContext } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from "../../notification/Notification"
const ItemDetailContainer = ({setCart}) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    const { setNotification } = useContext(NotificationContext)

    useEffect (() => {
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc =>{
            const data = doc.data()
            const productAdapted = {id: doc.id, ...data}
            setProduct(productAdapted)
        }).catch(error=> {
            setError(error)
            setNotification('Ha ocurrido un error')
        }).finally(
            setLoading(false)
        )
    },[productId])

    if(loading) {
        return (
            <h1>...</h1>
        )
    }
    return (
        <div>
            <ItemDetail key={product.id} product={product} setCart={setCart}/>
        </div>

    )
}

export default ItemDetailContainer