/** @format */

import React from 'react';
import './style.css';
import search from '../../assets/search.svg';
import filter from '../../assets/settings.svg';
const Search = () => {
	return (
		<div className='search'>
			<div className='search-wrapper'>
				<img src={search} alt='search' />
				<input placeholder='Search' />
			</div>
			<div className='filter'>
				<img src={filter} alt='filter' />
			</div>
		</div>
	);
};

export default Search;
