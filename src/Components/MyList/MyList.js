import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import {CardGroup} from 'react-bootstrap'
function MyList(props) {
	let allLiked = []
	if(props.liked)
	{
		allLiked = props.liked.map((image)=><ImageCard image={image} key={image.id} deleteFromLiked={props.deleteFromLiked} currentPage={props.currentPage}></ImageCard>)
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