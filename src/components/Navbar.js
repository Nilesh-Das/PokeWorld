import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
 
const Navbar = (props) => {
	/*setTimeout(() => {
		props.history.push('/about')
	}, 4000)*/
	return (
		<nav className="nav-wrapper red dark-3">
			<div className="container">
				<Link className="brand-logo left" to="/">PokeWorld</Link>
				<ul className="right">
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default withRouter(Navbar)