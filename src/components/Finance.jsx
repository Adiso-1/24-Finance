import React from 'react';
import stockApi from '../api/alphavantageApi';
import MarketSummary from './MarketSummary';

class Finance extends React.Component {
	state = {};

	// async componentDidMount() {
	// 	const
	// }
	render() {
		return (
			<div className="index-navbar">
				<MarketSummary />
			</div>
		);
	}
}
export default Finance;
