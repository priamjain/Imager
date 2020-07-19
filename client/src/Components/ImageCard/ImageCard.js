import React from 'react'
import PhotoOptions from '../PhotoOptions/PhotoOptions'
import {Card} from 'react-bootstrap'
function ImageCard(props){
	const borders = ['primary','secondary','success','danger','warning','info','dark','light'] 
	return (
			<Card 
				style={{width:'30em',height:'auto'}} 
				className={"p-1 m-2 align-self-start"} 
				border={borders[Math.floor(Math.random()*8)]}
				>
					<Card.Img src={props.image.urls.small} atl=""></Card.Img>
					<Card.ImgOverlay className="d-flex flex-row justify-content-end">
						<PhotoOptions image={props.image} addToLiked={props.addToLiked} currentPage={props.currentPage}></PhotoOptions>		
					</Card.ImgOverlay>
			</Card>	
	)
}

export default ImageCard