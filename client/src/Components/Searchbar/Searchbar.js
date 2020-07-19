import React,{useState} from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'
import keys from '../../keys'

function Searchbar(props) {
	const [searchText, setsearchText] = useState("")
	const handleSubmit = (e) =>{
		e.preventDefault();
		props.updateState("isLoading",true);
		fetch(`https://api.unsplash.com/search/photos?query=${searchText}&per_page=50`,{
			method:"GET",
			headers:
			{
				type:"application/json",
				Authorization: `Client-ID ${keys.client_id}`
			}
				
		})
		.then(data=>data.json())
		.then((data)=>props.updateState("searchResults",data))
		.then((data)=>props.updateState("currentPage",'search'))
		.catch((err)=>console.log(err))
	}
	return (
		<div className="d-none d-flex flex-row justify-content-center p-3">
			<Form inline style={{width:'30em'}} onSubmit={handleSubmit}>
				<FormControl type="text" placeholder="Search..." className="w-75" onChange={(e)=>setsearchText(e.target.value)} value={searchText}></FormControl>
				<Button type="submit" variant="outline-success" className="w-25">Search</Button>
			</Form>
		</div>
	)
}

export default Searchbar;