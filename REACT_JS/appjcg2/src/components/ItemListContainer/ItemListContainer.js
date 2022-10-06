import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from "../../asyncMock"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] =useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        if (!categoryId) {
        getProducts().then (res =>{
            setProducts(res)
        }).catch (error => {
            setError(true)
        }).finally (loading => {
            setLoading(false)
        })
    } else {
        getProductsByCategory(categoryId).then (res =>{
            setProducts(res)
        }).catch (error => {
            setError(true)
        }).finally (loading => {
            setLoading(false)
        })
    }
        
    },[categoryId])

    if (loading) {
        return <h2 style= {{textAlign:"center", padding:"300px"}}>...</h2>
    }

    if (error) { 
        return <h2 style= {{textAlign:"center", padding:"300px"}}>Ha ocurrido un error.</h2>
    }
    
    return <div>
                <h1 style= {{textAlign:"center", padding:"300px"}}>Hola, bienvenido a la app</h1>
                <ItemList products={products}/>
        </div>
}

export default ItemListContainer