import React,{useState} from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
function Searchbar(props) {
	const [searchText, setsearchText] = useState("")
	const handleSubmit = (e) =>{
		e.preventDefault();
		fetch(`https://api.unsplash.com/search/photos?query=${searchText}`,{
			method:"GET",
			headers:
			{
				type:"application/json",
				Authorization: 'Client-ID 9oMsiPLyzMga9QRquIGB3xLYL24WQrF7eMxHj2Ubh1E'
			}
				
		})
		.then(data=>data.json())
		.then((data)=>props.updateState("searchResults",data))
		.catch((err)=>console.log(err))
	}
	return (
		<div className="d-flex justify-content-center w-100 p-3">
			<Form inline className="w-50" onSubmit={handleSubmit}>
				<FormControl type="text" placeholder="Search..." className="mr-sm-2 w-50" onChange={(e)=>setsearchText(e.target.value)} value={searchText}></FormControl>
				<Button type="submit" variant="outline-success" className="w-25">Search</Button>
			</Form>
		</div>
	)
}

export default Searchbar