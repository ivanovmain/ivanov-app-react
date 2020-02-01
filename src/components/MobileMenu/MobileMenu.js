import React from 'react';
import './MobileMenus.css';
import {Link} from "react-router-dom";

export default class MobileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileMenuClass: '',
			overlayClass: ''
		};
		this.animated = () => {
			this.setState({
				mobileMenuClass: '',
				overlayClass: ''
			});
			setTimeout(() => {
				this.props.onCloseMobileMenu()
			}, 700);
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				mobileMenuClass: ' mobile-menu-inner__open',
				overlayClass: ' overlay-show'
			})
		}, 100);
	}

	render() {

		const {showMenu} = this.props;

		let mobileMenuClass = 'mobile-menu-inner';
		mobileMenuClass = showMenu ? mobileMenuClass + this.state.mobileMenuClass : mobileMenuClass;

		let overlayClass = 'overlay';
		overlayClass = showMenu ? overlayClass + this.state.overlayClass : overlayClass;

		return (
			<div className='MobileMenu'>
				<div className={mobileMenuClass}>
					<ul className='mobile-menu-list'>
						<li><Link to='/'>Image loader </Link></li>
						<li><Link to='/visual-api'>Visual API</Link></li>
					</ul>
				</div>
				<div onClick={this.animated} className={overlayClass}/>
			</div>
		);
	}
};
