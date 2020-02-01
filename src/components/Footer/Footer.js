import React from 'react';
import './Footer.css';

const Footer = (props) => {
	return (
		<div className='footer'>
		<div className='container'>
			<ul>
				<li>Created by V.V. Ivanov - FrontEnd Developer</li>
				<li>E-mail:<a href='email:ivanovvvmain@yandex.ru'>ivanovvvmain@yandex.ru</a></li>
				<li>Phone<a href='tel:79527239685'>+7(952)-723-96-85</a></li>
				<li>Profile<a href='https://github.com/ivanovmain'>github</a></li>
			</ul>
		</div>
		</div>
	);
};

export default Footer;