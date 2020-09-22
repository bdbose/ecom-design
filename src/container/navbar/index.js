/** @format */

import React from 'react';
import './style.css';
import cart from '../../assets/shopping-cart.svg';
const Nav = () => {
	return (
		<div className='navbar'>
			<div className='nav-wrapper'>
				<img src={cart} width='30px' alt='cart' />
				HeyBazaar
			</div>
		</div>
	);
};

export default Nav;
