/** @format */

import React from 'react';
import Display from '../../container/display';
import Footer from '../../container/footer';
import Nav from '../../container/navbar';
import Search from '../../container/search';
import Slide from '../../container/slide';

const Home = () => {
	return (
		<div className='home'>
			<Nav />
			<Search />
			<Slide />
			<Display />
			<Footer />
		</div>
	);
};
export default Home;
