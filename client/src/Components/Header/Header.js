import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Searchbar from '../Searchbar/Searchbar'
var Header = (props)=> {
	const navigate = props.currentPage === 'Search' ? 'Liked':'Search';
	return (
		<div id="header" className="container ">
			
			<Navbar bg="transparent" expand="md"  className='flex-row justify-content-around' fixed="top">
				<Navbar.Brand className='order-1'>Imager</Navbar.Brand>
				<Nav className='order-last order-md-2'>
					<Searchbar updateState={props.updateState}></Searchbar>
				</Nav>
				<Nav className='order-2 order-md-3 flex-row'>
					<Nav.Link  
					className='mr-3 mr-md-0' 
					onClick={
						(e)=>{
							e.preventDefault();
							props.updateState('currentPage',navigate);
						}
					}>
					{navigate}
					</Nav.Link>
					<Nav.Link href="https://github.com/priamjain">Github</Nav.Link>
					
				</Nav>
			</Navbar>
		</div>
	)
}

export default Header