import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer-container">
			<ul className="footer-list">
				<li>
					<Link to="/">Github</Link>
				</li>
				<li>
					<Link to="/">Linkedin</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
