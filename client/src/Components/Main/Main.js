import React from 'react'
import ImageList from '../ImageList/ImageList'
import {Spinner} from 'react-bootstrap'
import MyList from '../MyList/MyList'
function Main(props){
		const content =() =>{
			if(props.isLoading){
				return(
					<Spinner animation='border'></Spinner>
					)
			}
			else{
				switch (props.currentPage) {
					case 'Liked':
						return(
							<MyList liked={props.liked} currentPage={props.currentPage}></MyList>
							)
							
					default: 
						return(<ImageList addToLiked={props.addToLiked} images={props.searchResults.results} currentPage={props.currentPage}></ImageList>
							);
				}
			}
		}
		return (
			<div id="main" className="d-flex flex-column align-items-center">
				{content()}
			</div>
		)
}

export default Main;