import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
var Header = ()=> {
	return (
		<div id="header">
			<Navbar bg="transparent" expand="lg">
				<Navbar.Brand>Imager</Navbar.Brand>
				<Navbar.Toggle className="Toggle" area-control="navbar"></Navbar.Toggle>
				<Navbar.Collapse id="navbar">
					<Nav className="ml-auto">
						<Nav.Link href="https://github.com/priamjain">Github</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Header