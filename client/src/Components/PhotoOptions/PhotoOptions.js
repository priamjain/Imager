import React from 'react'
import {Button} from 'react-bootstrap'
import keys from '../../keys'
const download = require('downloadjs');
function PhotoOptions(props) {

	const downloadHandle = (e) =>{
		e.preventDefault();
		fetch(props.image.links.download_location,{
			mathod:"GET",
			headers:{
				Authorization: `Client-ID ${keys.client_id}`
			}
		})
		.then((res)=>res.json())
		.then((blob)=>{download(blob.url);console.log("downloading started");})
		.then(()=>console.log("downloaded"))
		
	}

	return (
		<div className="d-flex flex-column">
			<Button variant="success rounded-0" onClick={downloadHandle}>D</Button>
			<Button variant="light rounded-0" onClick={()=>props.addToLiked(props.image)}>L</Button>
		</div>
	)
}

export default PhotoOptions