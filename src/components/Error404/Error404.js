import React from 'react';
import './Error404.css';


const Error404 = () => {
	return(
		<div className='error-404-wrapper'>
			<h1 className='error-404'>Oops!
				<span role='img' aria-label='smile'>&#128517;</span>
				Page Not Found
			</h1>
		</div>
	)
};

export default Error404;