import MarketSummary from './MarketSummary';

const Finance = () => {
	const interval = 5;
	const outPutSize = (6.5 * 60) / interval;
	return (
		<div className="index-navbar">
			<MarketSummary
				name="S&P 500"
				symbol="SPY"
				interval={`${interval}min`}
				outputsize={outPutSize}
				apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
			/>
			<MarketSummary
				name="Nasdaq"
				symbol="QQQ"
				interval={`${interval}min`}
				outputsize={outPutSize}
				apikey="f2bdff475b4b4faaa092bd8ad2f3c0e5"
			/>
		</div>
	);
};

export default Finance;
