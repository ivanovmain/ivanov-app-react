import React from 'react';
import './DeleteItem.css'


const DeleteItem = (props) => {

	const {onImageDeleteEvent} = props;

	return (
		<span onClick={onImageDeleteEvent} className='deleter-card'>
      <i className='fa fa-remove'></i>
    </span>
	);
};

export default DeleteItem;