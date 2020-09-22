/** @format */

import React from 'react';
import './style.css';

const Details = [
	{
		img: '/assets/cafe1.png',
		name: 'Hello Cafe',
		des: 'This is cool pastry wow this cool text here',
		dis: '200M',
		time: '3mins',
		avl: 'Offers Available',
		star: 4,
	},
	{
		img: '/assets/cafe2.png',
		name: 'Bake Cafe',
		des: 'This is cool pastry wow this cool text here',
		dis: '200M',
		time: '3mins',
		avl: 'Offers Available',
		star: 3,
	},
	{
		img: '/assets/cafe3.png',
		name: 'Which Here',
		des: 'This is cool pastry wow this cool text here',
		dis: '200M',
		time: '3mins',
		avl: 'Offers Available',
		star: 3,
	},
	{
		img: '/assets/cafe4.png',
		name: 'Love it of day',
		des: 'This is cool pastry wow this cool text here',
		dis: '200M',
		time: '3mins',
		avl: 'Offers Available',
		star: 3,
	},
];

const Display = () => {
	return (
		<div className='display'>
			<div className='display-wrapper'>
				{Details.map((i) => {
					return (
						<div className='dis-items' key={i.name}>
							<img src={i.img} alt={i.name} />
							<div className='dis-details'>
								<div className='section'>
									<span className='dis-title' style={{ color: ' black' }}>
										{i.name}
									</span>
									<span className='dis-dis'>{i.dis}</span>
								</div>
								<div className='section'>
									<span className='dis-des'>{i.des}</span>
									<span className='dis-time'>{i.time}</span>
								</div>
								<div className='section'>
									<span className='dis-avl' style={{ color: '#8A2BE2' }}>
										{i.avl}
									</span>
									<span className='dis-star'>
										<img src={`/assets/star${i.star}.svg`} alt={i.star} />
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Display;
