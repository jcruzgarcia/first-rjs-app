import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {
    return (  
        <div>
            { products.map( product => (
                <Item to={`/detail/${product.id}`} key={product.id} product={product}/>
            ))
            }
        </div>
    )
}

export default ItemList