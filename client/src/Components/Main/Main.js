import React from 'react'
import Searchbar from '../Searchbar/Searchbar.js'
import ImageList from '../ImageList/ImageList'
import {Spinner} from 'react-bootstrap'
class Main extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 randomImage:"",
			 searchResults:{},
			 isLoading:false
		}
	}
	
	updateState = (key,value)=>{
		this.setState((prev)=>{
			if(prev.key !== value)
				return({
					isLoading:!prev.isLoading,
					[key]:value,
				})
		})
		console.log(this.state.searchResults)
	}

	render(){
		return (
			<div id="main" className="d-flex flex-column align-items-center">
				<Searchbar updateState={this.updateState} isLoading={this.state.isLoading}></Searchbar>
				{this.state.isLoading?<Spinner animation='border'></Spinner>
				:<ImageList addToLiked={this.props.addToLiked} images={this.state.searchResults.results}></ImageList>}
			</div>
		)
	}
}

export default Main;