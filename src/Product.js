import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    console.log('this is the basket',basket)

const addToBasket = () =>{
    // dispatch item to datalayer
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        }
    })
} 

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
               
                <p className='product_price'>${price}</p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_,i)=>(
                        <p className='product_star'><StarIcon/></p>
                    ))}
                    
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product