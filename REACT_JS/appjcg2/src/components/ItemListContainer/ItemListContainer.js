import { useState, useEffect, useContext } from "react"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { NotificationContext } from "../../notification/Notification"
import { getProducts } from '../../services/firebase/firestore'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] =useState(true)

    const { categoryId } = useParams()
    const { setNotification } = useContext(NotificationContext)


    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            setError(error)
            setNotification('Ha ocurrido un error')
        }).finally(() => {
            setLoading(false)
        })
        }, [categoryId])

    if (loading) {
        return <h2 style= {{textAlign:"center", padding:"300px"}}>...</h2>
    }

    if (error) { 
        return <h2 style= {{textAlign:"center", padding:"300px"}}>Ha ocurrido un error.</h2>
    }
    
    return <div>
                <h1  style= {{textAlign:"center", padding:"300px"}}>{greeting}</h1>
                <ItemList products={products}/>
        </div>
}

export default ItemListContainer