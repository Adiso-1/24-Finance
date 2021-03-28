import React from 'react';
import stockApi from '../api/alphavantageApi';
import MarketSummary from './MarketSummary';

class Finance extends React.Component {
	state = {};

	async componentDidMount() {
		try {
			const { data } = await stockApi.get(
				`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=QQQ&interval=5min&apikey=90XJQE7MYYR9K8GC`
			);
			const symbol = data['Meta Data']['2. Symbol'];
			const interval = Object.values(data['Time Series (5min)']);
			console.log(data);
			console.log(interval);
			const arr = [];
			interval.map((el) => {
				arr.push(parseFloat(el['4. close']));
			});
			await this.setState({ [symbol]: arr });
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		console.log(this.state);
		return (
			<div className="index-navbar">
				<MarketSummary data={this.state.QQQ} />
			</div>
		);
	}
}
export default Finance;
