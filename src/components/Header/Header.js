import React from 'react';
import './Header.css'
import logo from './logo-v1.png';
import MobileMenu from '../MobileMenu';
import { Link } from 'react-router-dom';
const Header = (props) => {
	const { showMenu } = props;

	const mobileMenu = showMenu ? <MobileMenu onCloseMobileMenu={props.onCloseMobileMenu} showMenu={showMenu}/> : null;
	return(
		<header className='header'>
			<div className='container'>
				<div className='header-inner'>
					<div className='logo-wrapper'>
						<img src={logo} alt='Logotype'/>
					</div>
					<nav className='header-nav'>
						<ul className='nav-list'>
							<li><Link to='/'>Image loader </Link></li>
							<li><Link to='/visual-api'>Visual API</Link></li>
						</ul>
							<div className='burger-wrapper' onClick={props.onShowMobileMenu}>
								<i className='fa fa-bars burger-img'></i>
							</div>
					</nav>
				</div>
			</div>
			{mobileMenu}
		</header>
	)
};

export default Header;