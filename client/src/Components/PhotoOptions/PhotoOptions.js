import React from 'react'
import {Button} from 'react-bootstrap'
function PhotoOptions(props) {
	return (
		<div className="d-flex flex-column">
			<Button variant="success rounded-0" >D</Button>
			<Button variant="light rounded-0">L</Button>
		</div>
	)
}

export default PhotoOptions