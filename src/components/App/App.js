import React, {Component} from 'react';
import Header from '../Header';
import './App.css';
import Main from '../Main';
import Footer from '../Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const TOKEN = 'a39528ead11b14c6e9ef69053d6c0734401964ba';

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: `Bearer ${TOKEN}`
	}
});


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMobileMenu: false
		};
		this.onShowMobileMenu = () => {
			this.setState((state) => {
				return {
					showMobileMenu: !state.showMobileMenu
				}
			})
		};
		this.onCloseMobileMenu = () => {
			this.setState({
				showMobileMenu: false
			})
		};
	}

	render() {
		return (
			<ApolloProvider client={client}>
				<Router>
					<div className="app">
						<Header
							onCloseMobileMenu={this.onCloseMobileMenu}
							showMenu={this.state.showMobileMenu}
							onShowMobileMenu={this.onShowMobileMenu}/>
						<Main/>
						<Footer/>
					</div>
				</Router>
			</ApolloProvider>
		)
	};
};