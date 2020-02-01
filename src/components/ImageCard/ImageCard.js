import React from 'react';
import './ImageCard.css';
import Spinner from '../Spinner';
import DeleteItem from '../DeleteItem';


export default class ImageCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: false
    };
    this.onImageLoading = () => {
      this.props.onErrorMsgClose();
      this.setState({
        loading: false
      })
    };
    this.onImageError = () => {
      this.props.onErrorMsg();
      this.setState({
        error: true
      })
    };
    this.onImageDeleteEvent = () => {
      this.props.onDeleteImage(this.props.imageId);
    }
  }


  render(){
    const { image } = this.props;
    const { loading, error } = this.state;
    
    if(error){
      return null;
    }
    return(
      <div className='card-wrapper'>
        <img onError={this.onImageError} 
             onLoad={this.onImageLoading} 
             className='card-img' 
             src={image} 
             alt='card'/>
        <DeleteItem onImageDeleteEvent={this.onImageDeleteEvent} />
        { loading && (
          <div className='image-container-overlay'>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}