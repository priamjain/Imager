import React from 'react'
import PhotoOptions from '../PhotoOptions/PhotoOptions'
import {Card} from 'react-bootstrap'
function ImageCard(props){
	const borders = ['primary','secondary','success','danger','warning','info','dark','light'] 
	return (
		<div key={props.image.id}>
			<Card 
				style={{width:'30em'}} 
				className={"p-1 m-2"} 
				border={borders[Math.floor(Math.random()*8)]}
				>
					<Card.Img src={props.image.urls.small} atl=""></Card.Img>
					<Card.ImgOverlay className="d-flex flex-row justify-content-end">
						<PhotoOptions image={props.image}></PhotoOptions>		
					</Card.ImgOverlay>
			</Card>	
		</div>
	)
}

export default ImageCard