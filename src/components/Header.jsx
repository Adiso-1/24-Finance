import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
	render() {
		return (
			<ul className="navbar">
				<div className="left-navbar">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/finance">Finance</Link>
					</li>
					<li>
						<Link to="/watchlist">Watchlist</Link>
					</li>
				</div>
				<div className="right-navbar">
					<li>Sign In</li>
				</div>
			</ul>
		);
	}
}
export default Header;
