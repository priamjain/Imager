import React from 'react'
import {Card,CardGroup} from 'react-bootstrap'
function ImageList(props) {
	const borders = ['primary','secondary','success','danger','warning','info','dark','light'] 
	let allImages = []
	if(props.images)
	{
		allImages = props.images.map((image)=>{
			return(
				<Card 
				key={image.id} 
				className={"w-25 p-1 m-2"} 
				border={borders[Math.floor(Math.random()*8)]}
				>
				<Card.Img src={image.urls.small} atl=""></Card.Img>
				</Card>
				)
		})
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