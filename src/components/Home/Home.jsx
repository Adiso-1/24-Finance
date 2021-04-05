import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';
import iconImg from '../../images/finance-icon.png';
import './Home.css';

const Home = () => {
	return (
		<div className="home-container">
			<div className="header-container">
				<img src={iconImg} alt="ICON 24 News & Finance" />
				<h1 className="header">24 News & Finance</h1>
			</div>
			{<NewsCard type="latest-news" articelNum={10} category="general" />}
			<Footer />
		</div>
	);
};

export default Home;
