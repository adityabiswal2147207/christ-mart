import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://cdn.pixabay.com/photo/2016/01/22/18/59/cyprus-1156434_1280.jpg' alt='' />
                <div className='home__row'>
                    <Product id="1111" title='The Margarito Sandwich' price={50} image='https://cdn.pixabay.com/photo/2018/03/31/07/43/bread-3277473_1280.jpg' rating={5} />
                    <Product id="1112" title='The Italiano Noodles, Smooth and spicy noodles you can enjoy with everyone' price={60} image='https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078__340.jpg' rating={4} />
                </div>
                <div className='home__row'>
                <Product id='1113' title={'The Daily Diary, The diary you can use on daily basis and for seperate occasions'} price={80} image='https://cdn.pixabay.com/photo/2014/12/27/15/34/notebook-581128_1280.jpg' rating={3} />
                <Product id='1114' title={'Christ Hoodies, The perfect hoodie for every christite for their swag'} price={999} image='https://cdn.pixabay.com/photo/2021/03/17/13/59/man-6102394_1280.jpg' rating={5}/>
                <Product id='1115' title={'Cooler Water Bottle, the perfect bottle to fill your throat with chilled water'} price={250} image='https://cdn.pixabay.com/photo/2017/01/23/09/52/water-2001912_1280.jpg' rating={2} />
                </div>
                <div className='home__row'>
                <Product id='1116' title={'Junglie Funglie Fries, spicy fries to make you scream loud'} price={40} image='https://cdn.pixabay.com/photo/2016/01/26/00/53/potatoe-1161819_1280.jpg' rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home