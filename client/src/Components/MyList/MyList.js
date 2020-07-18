import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {CardGroup} from 'react-bootstrap'
function MyList(props) {
	console.log(props.liked)
	let allLiked = []
	if(props.liked)
	{
		allLiked = props.liked.map((image)=><ImageCard image={image} key={image.id} addToLiked={props.addToLiked}></ImageCard>)
	}
	return (

		<CardGroup 
		className="d-flex flex-column justify-content-start align-items-start"
		> 
		{allLiked}
		</CardGroup>
	)
}

export default MyList