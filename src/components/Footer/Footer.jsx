import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer-container">
			<ul className="footer-list">
				<li>
					<Link to="/https://github.com/Adiso-1">
						<i class="fab fa-github fa-2x"></i>
					</Link>
				</li>
				<li>
					<Link to="/https://www.linkedin.com/in/adi-levy-a2138b160/">
						<i class="fab fa-linkedin-in fa-2x"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
