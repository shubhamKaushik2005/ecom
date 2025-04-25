import React from 'react'
import { CiShoppingCart } from 'react-icons/ci';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom'
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></link>

function Nav() {
    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className='logo'>
                        <img src="images/icons/logo-01.png" alt="Logo" />
                    </div>
                    <div className='nav-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/shop'>Features</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/blog'>About</Link>
                    </div>
                    <div className='op'>
                        <div class="search-container">
                            <input type="text" class="search-input" placeholder="Search..." />
                            <button class="search-btn">
                                <i class="fa fa-search"></i>
                                <a href="#"><i><CiShoppingCart /></i></a>
                                <a href="#"><i><GiSelfLove /></i></a>
                            </button>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
        </>
    )
}

export default Nav
