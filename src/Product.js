import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>The Cheesy Sandwich</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>1.00</strong>
                </p>
                <div className='product__rating'>
                    <p>💥</p>
                </div>
            </div>
            <img src='https://cdn.pixabay.com/photo/2018/03/31/07/43/bread-3277473_1280.jpg' alt='' />

            <button className='product__button'>Add to bag</button>
        </div>
    )
}

export default Product