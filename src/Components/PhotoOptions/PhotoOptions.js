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
		<div className="d-flex flex-row mt-auto justify-content-between">
			{
				props.currentPage === 'Liked'
				?<Button variant="danger rounded-0" onClick={()=>props.deleteFromLiked(props.image)}><i className="fas fa-times-circle"></i></Button>
				:<Button variant={`${props.liked?"danger":"light"} rounded-0`} onClick={()=>props.addToLiked(props.image)}><i className="far fa-heart"></i></Button>
			}
			
			<Button variant="success rounded-0" onClick={downloadHandle}><i className="fas fa-download"></i></Button>
		</div>
	)
}

export default PhotoOptions