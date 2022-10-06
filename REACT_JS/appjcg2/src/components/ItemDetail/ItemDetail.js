import ItemCounter from "../ItemCounter/ItemCounter"

const ItemDetail = ({products}) => {
    return (  
        <div>
        { products.map( product => (
           <div>
               <h1>{product.name}</h1>
               <h2>{product.price}</h2>
               <h3>{product.description}</h3>
               <ItemCounter />
           </div>
        ))
        }
    </div>
    )
}

export default ItemDetail