import React, { useEffect, useState } from 'react';
import stockApi from '../api/alphavantageApi';
import MarketSummary from './MarketSummary';

const Finance = () => {
	const [symbol, setSymbol] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			try {
				const { data } = await stockApi.get(
					`https://www.alphavantage.co/query?`,
					{
						params: {
							function: 'TIME_SERIES_INTRADAY',
							symbol: `QQQ`,
							interval: '5min',
							apikey: '90XJQE7MYYR9K8GC',
						},
					}
				);
				const symbol = data['Meta Data']['2. Symbol'];
				const interval = Object.values(data['Time Series (5min)']);
				const arr = [];
				interval.map((el) => {
					arr.push(parseFloat(el['4. close']));
				});
				// console.log(symbol);
				// console.log(interval);
				setSymbol(interval);
			} catch (error) {}
		};
		fetch();
	}, []);

	return (
		<div className="index-navbar">
			<MarketSummary name="Nasdaq" data={symbol} />
		</div>
	);
};

export default Finance;
