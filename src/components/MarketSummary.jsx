import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import './MarketSummary.css';

const MarketSummary = (props) => {
	const chartRef = useRef('');
	console.log(props.data);
	useEffect(() => {
		console.log(chartRef.current);
	}, []);

	return (
		<div className="chart">
			<div className="chart-details">
				<p>{props.name}</p>
			</div>
			<Line data={props.data} ref={chartRef} width={100} height={50} />
		</div>
	);
};
export default MarketSummary;
