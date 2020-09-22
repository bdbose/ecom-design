/** @format */

import React from 'react';
import './style.css';

const Icons = [
	{
		url: '/assets/home.svg',
	},
	{
		url: '/assets/group.svg',
	},
	{
		url: '/assets/Vector.svg',
	},
	{
		url: '/assets/user.svg',
	},
];

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-wrapper'>
				{Icons.map((i) => {
					return (
						<div className='footer-icons' key={i.url}>
							<img src={i.url} alt={i.url} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
