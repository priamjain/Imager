import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {CardGroup} from 'react-bootstrap'
function ImageList(props) {
	
	let allImages = []
	if(props.images)
	{
		allImages = props.images.map((image)=><ImageCard image={image}></ImageCard>)
	}
	return (

		<CardGroup 
		className="d-flex flex-column align-items-center"
		> 
		{allImages}
		</CardGroup>
	)
}

export default ImageList