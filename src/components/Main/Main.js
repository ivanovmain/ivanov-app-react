import React from 'react';
import './Main.css'
import ImageLoader from '../ImageLoader';
import {Route, Switch} from 'react-router-dom';
import VisualApi from '../VisualApi';
import Error404 from '../Error404';

const Main = () => {
	return (
		<div className='main-wrapper'>
			<div className='container'>
				<Switch>
					<Route exact path='/'>
						<ImageLoader/>
					</Route>
					<Route path='/visual-api'>
						<VisualApi/>
					</Route>
					<Route path='*'>
						<Error404 />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default Main