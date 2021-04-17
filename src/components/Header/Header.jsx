import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
		</ul>
	);
};
export default Header;
