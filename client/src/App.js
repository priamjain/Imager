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
			currentPage:'search'
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
		console.log(this.state)
	}
	addToLiked = (id)=>this.setState((prev) => ({liked:[...prev.liked,id]}))
	render(){
		return (
			<div className="App">
				<Header updateState={this.updateState} isLoading={this.state.isLoading}></Header>

				<Main currentPage={this.state.currentPage} addToLiked={this.addToLiked} searchResults={this.state.searchResults} liked={this.state.liked}></Main>
			</div>
			);
	}
}

export default App;
