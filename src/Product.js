import React from 'react';
import './Product.css';

function Product({title, image, price, rating}) {
    return (
        //making the div with a class and mapping all the features accordingly
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    //mapping the stars according to the value inserted and filling it
                    {Array(rating).fill().map((_, i)=>( <p>⭐️</p>))} 
                </div>
            </div>
            <img src={image} alt='' />

            <button className='product__button'>ADD TO BASKET</button>
        </div>
    )
}

export default Product