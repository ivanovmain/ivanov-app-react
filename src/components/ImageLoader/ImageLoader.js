import React, { Component } from 'react';
import './ImageLoader.css';
import Form from '../Form';
import ImageCard from '../ImageCard';


export default class ImageLoader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			index: 2,
			showError: false
		};
		this.onAddImage = (url) => {
			this.setState((prevState) => {
				const newImages = [{ id: prevState.index++, url }, ...prevState.images];
				return {
					images: newImages
				}
			})
		};
		this.onDeleteImage = (id) => {
			this.setState(({ images }) => {
				const idx = images.findIndex((img) => {
					return img.id === id;
				});

				const newImages = [
					...images.slice(0, idx),
					...images.slice(idx + 1)
				];

				return {
					images: newImages
				}
			})
		};
		this.onErrorMsgShow = () => {
			this.setState({
				showError: true
			})
		};
		this.onErrorMsgClose = () => {
			this.setState({
				showError: false
			})
		};
	}


	render() {
		const { images, showError } = this.state;
		const imagesData = images.map((image) => {
			return (
				<ImageCard 
					onErrorMsgClose={this.onErrorMsgClose}
					onErrorMsg={this.onErrorMsgShow}
					onDeleteImage={this.onDeleteImage}
					key={image.id}
					image={image.url}
					imageId={image.id} />)
		});
		const error = showError ? <span class='image-error'>Invalid url</span> : null;
		return (
			<div className='image-loader'>
				<h1>Image Loader</h1>
				<Form onAddData={this.onAddImage}
							placeholder='Enter image url' />
				{error}
				<section className='main'>
					{imagesData}
				</section>
			</div>
		);
	}
}
