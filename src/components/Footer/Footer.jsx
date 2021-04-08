import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
	return (
		<div className={`footer-container ${props.stickToBottom}`}>
			<ul className="footer-list">
				<li>
					<a target="_blank" href="https://github.com/Adiso-1">
						<i className="fab fa-github fa-2x"></i>
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/adi-levy-a2138b160/"
					>
						<i className="fab fa-linkedin-in fa-2x"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
