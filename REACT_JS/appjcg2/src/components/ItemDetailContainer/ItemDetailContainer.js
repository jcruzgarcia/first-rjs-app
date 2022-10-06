import { useState,useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect (() => {
        getProduct(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    },[productId])

    if(loading) {
        return (
            <h1>...</h1>
        )
    }
    return (
        <div>
            <ItemDetail key={product.id} product={product}/>
        </div>

    )
}

export default ItemDetailContainer