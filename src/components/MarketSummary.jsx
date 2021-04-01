import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import stockApi from '../api/alphavantageApi';
import twelvedata from '../api/twelvedata';
import './MarketSummary.css';

const MarketSummary = (props) => {
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await twelvedata.get(`/time_series?`, {
					params: {
						outputsize: props.outputsize,
						interval: props.interval,
						symbol: props.symbol,
						apikey: props.apikey,
					},
				});
				console.log(data);
				const quoteArr = [];
				data.values.map((el) => {
					quoteArr.push(parseFloat(el.close));
				});
				setChartData({
					labels: Array(quoteArr.length).join('.').split('.'),
					datasets: [
						{
							label: props.name,
							data: quoteArr,
							backgroundColor: ['green'],
							borderWidth: 0,
						},
					],
				});
			} catch (error) {
				console.log('Something went wrong');
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className="chart">
			<div className="chart-details">
				<span>{props.name}</span>
				{/* <span>
					{chartData.datasets[0].data[chartData.datasets[0].data.length - 1]}
				</span>
				<span>
					{(
						(chartData.datasets[0].data[chartData.datasets[0].data.length - 1] /
							chartData.datasets[0].data[0] -
							1) *
						100
					).toFixed(2)}
					%
				</span> */}
			</div>
			<Line
				data={chartData}
				options={{
					responsive: true,
					title: { display: false },
					scales: {
						yAxes: [
							{
								ticks: {
									autoSkip: true,
									beginAtZero: false,
								},
								gridLines: {
									display: false,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									display: false,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};

// ! WORKS WITH ALPHAADVANTAGE API
// const MarketSummary = (props) => {
// 	const [chartData, setChartData] = useState({});
// 	const chartRef = useRef('');

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const { data } = await stockApi.get(`/query?`, {
// 					params: {
// 						function: props.function,
// 						symbol: props.symbol,
// 						interval: props.interval,
// 						apikey: props.apikey,
// 					},
// 				});
// 				// const symbol = data['Meta Data']['2. Symbol'];
// 				const interval = Object.values(data[`Time Series (${props.interval})`]);
// 				const quoteArr = [];
// 				interval.map((el) => {
// 					quoteArr.push(parseFloat(el['4. close']));
// 				});
// 				setChartData({
// 					labels: Array(quoteArr.length).join('.').split('.'),
// 					datasets: [
// 						{
// 							label: props.name,
// 							data: quoteArr,
// 							backgroundColor: ['green'],
// 							borderWidth: 0,
// 						},
// 					],
// 				});
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
// 		fetchData();
// 	}, []);
// 	console.log(
// 		chartData.datasets[0].data[chartData.datasets[0].data.length - 1]
// 	);
// 	return (
// 		<div className="chart">
// 			<div className="chart-details">
// 				<span>{props.name}</span>
// 				<span>
// 					{chartData.datasets[0].data[chartData.datasets[0].data.length - 1]}
// 				</span>
// 				<span>
// 					{(
// 						(chartData.datasets[0].data[chartData.datasets[0].data.length - 1] /
// 							chartData.datasets[0].data[0] -
// 							1) *
// 						100
// 					).toFixed(2)}
// 					%
// 				</span>
// 			</div>
// 			<Line
// 				data={chartData}
// 				options={{
// 					responsive: true,
// 					title: { display: false },
// 					scales: {
// 						yAxes: [
// 							{
// 								ticks: {
// 									autoSkip: true,
// 									beginAtZero: false,
// 								},
// 								gridLines: {
// 									display: false,
// 								},
// 							},
// 						],
// 						xAxes: [
// 							{
// 								gridLines: {
// 									display: false,
// 								},
// 							},
// 						],
// 					},
// 				}}
// 			/>
// 		</div>
// 	);
// };
export default MarketSummary;
