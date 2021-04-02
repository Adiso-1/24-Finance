import MarketSummary from './MarketSummary';

const Finance = () => {
	let time = new Date().getHours() + new Date().getMinutes() / 60;
	const interval = 5;
	const outPutSize =
		time - 16.5 > 6.5 ? (6.5 * 60) / interval : ((time - 16.5) * 60) / interval;
	const stockRequest = [
		{ symbol: 'MSFT', name: 'Microsoft' },
		{ symbol: 'AAPL', name: 'Apple' },
	];
	console.log(Math.round(outPutSize) + 1);
	return (
		<div className="index-navbar">
			<MarketSummary
				name="S&P 500"
				symbol="SPY"
				interval={`${interval}min`}
				outputsize={Math.round(outPutSize) + 1}
				apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
			/>
			<MarketSummary
				name="Nasdaq"
				symbol="QQQ"
				interval={`${interval}min`}
				outputsize={Math.round(outPutSize) + 1}
				apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
			/>
			{/* <MarketSummary
				name={stockRequest.map((stock) => stock.name)}
				symbol={stockRequest.map((stock) => stock.symbol)}
				interval={`${interval}min`}
				outputsize={Math.round(outPutSize) + 1}
				apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
			/> */}
		</div>
	);
};

export default Finance;
