import React from 'react'
import PhotoOptions from '../PhotoOptions/PhotoOptions'
import {Card} from 'react-bootstrap'
function ImageCard(props){
	const borders = ['primary','secondary','success','danger','warning','info','dark','light'] 
	return (
			<Card 
				style={{width:'25rem',height:'auto'}} 
				className={"p-1 m-2"} 
				border={borders[Math.floor(Math.random()*8)]}
				>
					<Card.Img src={props.image.urls.small} atl=""></Card.Img>
					<Card.ImgOverlay>
						<PhotoOptions liked={props.liked} image={props.image} addToLiked={props.addToLiked} deleteFromLiked={props.deleteFromLiked} currentPage={props.currentPage}></PhotoOptions>		
					</Card.ImgOverlay>
			</Card>	
	)
}

export default ImageCard