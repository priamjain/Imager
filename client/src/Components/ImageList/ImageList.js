import React from 'react'
import PhotoOptions from '../PhotoOptions/PhotoOptions'
import {Card,CardGroup} from 'react-bootstrap'
function ImageList(props) {
	const borders = ['primary','secondary','success','danger','warning','info','dark','light'] 
	let allImages = []
	if(props.images)
	{
		allImages = props.images.map((image)=>{
			return(
				<div>
					<Card 
					key={image.id}
					style={{width:'30em'}} 
					className={"p-1 m-2"} 
					border={borders[Math.floor(Math.random()*8)]}
					>
						<Card.Img src={image.urls.small} atl=""></Card.Img>
						<Card.ImgOverlay className="d-flex flex-row justify-content-end">
							<PhotoOptions></PhotoOptions>		
						</Card.ImgOverlay>
					</Card>
					
				</div>
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