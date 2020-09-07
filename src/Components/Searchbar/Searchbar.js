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
		.then((data)=>props.updateState("currentPage",'Search'))
		.catch((err)=>console.log(err))
	}
	return (
		<div className="d-flex flex-row justify-content-center p-3">
			<Form inline className='d-flex fex-row justify-content-center' onSubmit={handleSubmit}>
				<FormControl type="text" placeholder="Search..." className="mr-1 ml-0" onChange={(e)=>setsearchText(e.target.value)} value={searchText}></FormControl>
				<Button type="submit" variant="success">Search</Button>
			</Form>
		</div>
	)
}

export default Searchbar;