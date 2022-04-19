import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
    return (
        //making a div and giving it a class name header as it is a header component
        <div className='header'>
            <h2>ChristMart</h2><img className='header__logo' src='https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_1280.png' alt='brandlogo' />

            <div className='header__search'>
                <input className='header__searchInput' type="text" /> <SearchIcon className='header__searchIcon' />
            </div>

            <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>VIP</span>
                </div>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </div>

        </div>
    )
}

export default Header