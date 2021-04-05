import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import twelvedata from '../../api/twelvedata';
import './MarketSummary.css';

const MarketSummary = (props) => {
	const [chartData, setChartData] = useState({});
	console.log(Object.keys(chartData).length);
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
				const quoteArr = [];
				data.values.map((el) => quoteArr.push(parseFloat(el.close)));
				setChartData({
					// labels: Array(quoteArr.length).join('.').split('.'),
					labels: Array(78).join('.').split('.'),
					datasets: [
						{
							label: props.name,
							data: quoteArr.reverse(),
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
				<span>
					{Object.keys(chartData).length &&
						chartData.datasets[0].data[chartData.datasets[0].data.length - 1]}
				</span>
				<span>
					{Object.keys(chartData).length &&
						(
							(chartData.datasets[0].data[
								chartData.datasets[0].data.length - 1
							] /
								chartData.datasets[0].data[0] -
								1) *
							100
						).toFixed(2)}
					%
				</span>
			</div>
			<Line
				data={chartData}
				options={{
					responsive: true,
					title: { display: false },
					legend: { display: false },
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
export default MarketSummary;
