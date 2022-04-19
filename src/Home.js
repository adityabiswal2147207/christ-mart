import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://cdn.pixabay.com/photo/2016/01/22/18/59/cyprus-1156434_1280.jpg' alt='' />
                <div className='home__row'>
                    <Product />
                    <Product />
                </div>
                <div className='home__row'>
                <Product />
                <Product />
                <Product />
                </div>
                <div className='home__row'>
                <Product />
                </div>
            </div>
        </div>
    )
}

export default Home