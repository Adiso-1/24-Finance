import Footer from '../Footer/Footer';
import MarketSummary from '../MarketSummary/MarketSummary';
import NewsCard from '../NewsCard/NewsCard';
import './Finance.css';

const Finance = () => {
	const apiKey = 'f2bdff475b4b4faaa092bd8ad2f3c0e5';
	const time = new Date().getTime();
	const day = new Date().getDay();
	const interval = 1;
	console.log(time);
	console.log(day);

	// const outPutSize = 78;
	const outPutSize =
		time - 16.5 > 6.5 && day !== 6 && day !== 0
			? (6.5 * 60) / interval
			: ((time - 16.5) * 60) / interval;

	return (
		<div>
			<div className="index-navbar">
				<MarketSummary
					name="S&P 500"
					symbol="SPX"
					interval={`${interval}min`}
					outputsize={Math.round(outPutSize) + 1}
					apikey={apiKey}
				/>
				<MarketSummary
					name="Nasdaq"
					symbol="IXIC"
					interval={`${interval}min`}
					outputsize={Math.round(outPutSize) + 1}
					apikey={apiKey}
				/>
				<MarketSummary
					name="Dow 30"
					symbol="DJI"
					interval={`${interval}min`}
					outputsize={Math.round(outPutSize) + 1}
					apikey={apiKey}
				/>
				<MarketSummary
					name="Russell 2000"
					symbol="RUT"
					interval={`${interval}min`}
					outputsize={Math.round(outPutSize) + 1}
					apikey={apiKey}
				/>
				<MarketSummary
					name="BTC/USD"
					symbol="BTC/USD"
					interval={`${interval}min`}
					outputsize={Math.round(outPutSize) + 1}
					apikey={apiKey}
				/>
			</div>
			<div>
				<NewsCard type="latest-news" articelNum={7} category="finance" />
			</div>
			<Footer />
		</div>
	);
};

export default Finance;
