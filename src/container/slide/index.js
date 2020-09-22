/** @format */

import React from 'react';
import './style.css';

const Images = [
	{
		url: '/assets/food.png',
		title: 'Food',
	},
	{
		url: '/assets/computer.png',
		title: 'Computer',
	},
	{
		url: '/assets/headset.png',
		title: 'Electronics',
	},
	{
		url: '/assets/sofa.png',
		title: 'Sofa',
	},
	{
		url: '/assets/vegetables.png',
		title: 'Vegetables',
	},
];

const Slide = () => {
	return (
		<div className='slidebar'>
			<div className='slide-wrapper'>
				{Images.map((i) => {
					return (
						<div className='items' key={i.url}>
							<img src={i.url} alt={i.url} />
							<div className='slide-title'>{i.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Slide;
