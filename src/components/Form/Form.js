import React, {Component} from 'react';
import './Form.css';


export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputData: ''
		};
		this.onInputDataChange = (e) => {
			this.setState({
				inputData: e.target.value
			})
		};
		this.onSubmitForm = (e) => {
			e.preventDefault();
			this.setState({
				inputData: ''
			});
			this.props.onAddData(this.state.inputData);
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmitForm} className='form'>
				<input type='text' className='form__input'
				       placeholder={this.props.placeholder}
				       value={this.state.inputData}
				       onChange={this.onInputDataChange}
				/>
				<button type='submit' className='form__btn'>load</button>
			</form>
		);
	}
}