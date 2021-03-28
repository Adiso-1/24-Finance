import React from 'react';
import { Line } from 'react-chartjs-2';
import './MarketSummary.css';

class MarketSummary extends React.Component {
	state = {
		labels: Array(100).join('.').split('.'),
		datasets: [
			{
				fill: true,
				lineTension: 0,
				backgroundColor: 'green',
				data: this.props.data,
			},
		],
	};
	render() {
		console.log(this.props.data);
		return (
			<div className="chart">
				<Line
					data={this.state}
					options={{
						title: {
							display: false,
						},
						legend: {
							display: false,
						},
						tooltips: {
							display: false,
						},
					}}
				/>
			</div>
		);
	}
}
export default MarketSummary;
