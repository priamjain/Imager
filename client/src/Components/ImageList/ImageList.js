import React from 'react'
import {ListGroup} from 'react-bootstrap'
function ImageList(props) {
	let allImages = []
	if(props.images)
	{
		allImages = props.images.map((image)=>{
			return(
				<ListGroup.Item key={image.id}>
						<img src={image.urls.thumb} alt=""/>
				</ListGroup.Item>
				)
		})
	}
	else{
		allImages = <h1>None</h1>
	}
	return (
		<ListGroup>
		{allImages}
		</ListGroup>
	)
}

export default ImageList