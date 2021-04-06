import React from 'react';
import Footer from '../Footer/Footer';
import LineGraph from '../LineGraph/LineGraph';
import NewsCard from '../NewsCard/NewsCard';
import './Finance.css';

const Finance = () => {
	const apiKey = 'f2bdff475b4b4faaa092bd8ad2f3c0e5';
	const names = ['S&P 500', 'Nasdaq', 'Dow 30', 'Russel 2000', 'BTC/USD'];
	const symbols = ['SPX', 'IXIC', 'DJI', 'RUT', 'BTC/USD'];
	return (
		<div>
			<div className="index-navbar">
				{symbols.map((symbol, i) => {
					return (
						<React.Fragment key={i}>
							<LineGraph
								showMoreData={true}
								name={names[i]}
								symbol={symbol}
								interval="1min"
								apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
								width={200}
								height={100}
							/>
						</React.Fragment>
					);
				})}
			</div>
			<div className="finance-news">
				<NewsCard type="latest-news" articelNum={7} category="finance" />
			</div>
			<Footer />
		</div>
	);
};

export default Finance;
