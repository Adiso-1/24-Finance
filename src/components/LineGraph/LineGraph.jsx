import React, { useState, useEffect } from 'react';
import twelveData from '../../api/twelvedata';
import './LineGraph.css';
import { Line } from 'react-chartjs-2';

const LineGraph = (props) => {
	const [chartData, setChartData] = useState({});
	// Adjustments
	const marketDay = new Date().getDay();
	const year = new Date().getFullYear();
	const time = new Date().getHours();
	let month = (new Date().getMonth() + 1).toString();
	if (month.length === 1) {
		month = '0' + month;
	}
	const subtractDays = marketDay === 0 ? 2 : 1;
	const day =
		time > 15 && time < 24
			? new Date().getDate().toString()
			: new Date().getDate().toString() - subtractDays;
	if (day.length === 1) {
		day = '0' + day;
	}
	const chart = async () => {
		try {
			const promise = twelveData.get('/time_series?', {
				params: {
					symbol: props.symbol,
					interval: props.interval,
					apikey: props.apikey,
					dp: 2,
					start_date: `${year}-${month}-${day}`,
				},
			});
			const response = await Promise.all([promise]);
			const data = response[0].data;
			const labels = data.values.map((el) => el.datetime.slice(11));
			const quots = data.values.map((el, i) =>
				i === 390 ? el.open : el.close
			);

			const openRate = Number(quots[quots.length - 1]);
			const closeRate = Number(quots[0]);

			const chartColor = closeRate > openRate ? 'green' : 'red';
			setChartData({
				labels: labels.reverse(),
				datasets: [
					{
						data: quots.reverse(),
						backgroundColor: chartColor,

						borderWidth: 0,
						tension: 0,
					},
				],
			});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		chart();
	}, []);

	let firstNum;
	let lastNum;
	let changeNum;
	if (Object.keys(chartData).length > 0) {
		firstNum = Number(chartData.datasets[0].data[0]);
		lastNum = Number(
			chartData.datasets[0].data[chartData.datasets[0].data.length - 1]
		);
		changeNum = Number(
			chartData.datasets[0].data[chartData.datasets[0].data.length - 1] -
				chartData.datasets[0].data[0]
		);
	}
	return (
		<div className="chart-graph">
			{props.showMoreData && Object.keys(chartData).length > 0 && (
				<div className="more-data">
					<div>{props.name}</div>
					<div>{lastNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
					<div
						className={`${chartData.datasets[0].backgroundColor} more-data-close`}
					>
						<span>{changeNum.toFixed(2)}</span>
						<span>({((changeNum / lastNum) * 100).toFixed(2)}%)</span>
					</div>
				</div>
			)}
			<Line
				data={chartData}
				options={{
					responsive: false,
					maintainAspectRatio: false,
					tooltips: { display: false },
					title: { display: false },
					legend: { display: false, labels: false },
					elements: {
						point: {
							radius: 0,
						},
					},
					hover: {
						mode: 'nearest',
						intersect: true,
					},
					scales: {
						yAxes: [
							{
								ticks: {
									suggestedMax:
										Object.keys(chartData).length &&
										Math.max.apply(chartData.datasets[0].data),
									suggestedMin:
										Object.keys(chartData).length &&
										Math.min.apply(chartData.datasets[0].data),
									autoSkip: true,
									beginAtZero: false,
								},
								gridLines: {
									display: true,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									display: false,
								},
								ticks: {
									display: !props.showMoreData,
								},
							},
						],
					},
				}}
				width={props.width}
				height={props.height}
			/>
		</div>
	);
};
export default LineGraph;
