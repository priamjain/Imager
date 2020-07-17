import React from 'react'
import Searchbar from '../Searchbar/Searchbar.js'
import ImageList from '../ImageList/ImageList'
class Main extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 randomImage:"",
			 searchResults:{}
		}
	}
	
	updateState = (key,value)=>{
		this.setState((prev)=>{
			if(prev.key !== value)
				return({
					[key]:value
				})
		})
	}

	render(){
		return (
			<div id="main">
				<Searchbar updateState={this.updateState}></Searchbar>
				<ImageList images={this.state.searchResults.results}></ImageList>
			</div>
		)
	}
}

export default Main;