import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchResults:{},
			liked :[],
			isLoading:false,
			currentPage:'Search'
		}
	}

	updateState = (key,value)=>{
		this.setState((prev)=>{
			if(prev.key !== value)
				return({
					isLoading: false,
					[key]:value,
				})
		})
	}
	addToLiked = (image)=>this.setState((prev) => ({liked:[...prev.liked,image]}))
	deleteFromLiked = (image)=>{
		this.setState(prev=>({liked:prev.liked.filter(img => img.id!==image.id)}));
	};
	render(){
		return (
			<div className="App">
				<Header updateState={this.updateState} currentPage={this.state.currentPage}></Header>

				<Main 
				isLoading={this.state.isLoading}
				currentPage={this.state.currentPage} 
				addToLiked={this.addToLiked} 
				searchResults={this.state.searchResults} 
				liked={this.state.liked}
				deleteFromLiked={this.deleteFromLiked}
				>
				</Main>
			</div>
			);
	}
}

export default App;
