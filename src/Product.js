import React from 'react';
import './Product.css';

function Product({title, image, price, rating}) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i)=>( <p>⭐️</p>))} 
                </div>
            </div>
            <img src={image} alt='' />

            <button className='product__button'>ADD TO BASKET</button>
        </div>
    )
}

export default Product