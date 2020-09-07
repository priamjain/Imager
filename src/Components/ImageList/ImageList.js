import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {CardGroup} from 'react-bootstrap'
function ImageList(props) {
	
	let allImages = []
	if(props.images)
	{

		allImages = props.images.map((image)=>{
			return <ImageCard liked={props.liked.includes(image)} image={image} key={image.id} addToLiked={props.addToLiked} currentPage={props.currentPage}></ImageCard>})
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