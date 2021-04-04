import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<div className="home-container">
			<h1 className="header">24 News & Finance</h1>
			{<NewsCard articelNum={10} category="general" />}
			<Footer />
		</div>
	);
};

export default Home;
