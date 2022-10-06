import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (

            <Link to={`/detail/${product.id}`}>
                <li className='productName'>{product.name}</li>
                <li className='productPrice'>${product.price}</li>
                <div className='productDetailButton'>
                    <Button label='Ver Detalle' to={`/detail/${product.id}`} ></Button>
                </div>
            </Link>

)}
    
export default Item