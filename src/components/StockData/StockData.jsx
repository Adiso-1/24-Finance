import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import twelveData from '../../api/twelvedata';
import Footer from '../Footer/Footer';
import NewsCard from '../NewsCard/NewsCard';
import MarketSummary from '../MarketSummary/MarketSummary';
import './StockData.css';

const StockData = () => {
	const [data, setData] = useState({});
	const symbol = useParams().symbol;
	const apikey = 'f2bdff475b4b4faaa092bd8ad2f3c0e5';
	const time = new Date().getHours();
	useEffect(() => {
		const getData = async () => {
			const { data } = await twelveData.get('/quote?', {
				params: {
					symbol,
					apikey,
				},
			});
			setData(data);
		};
		getData();
	}, []);
	console.log(data);

	return (
		<>
			{Object.keys(data).length > 0 ? (
				<div className="container">
					<div>
						<div className="stock-page-header">
							<div className="stock-name">
								<h2>
									{data.name} ({data.symbol})
								</h2>
								<p>{data.exchange}</p>
							</div>
							<div className="stock-numbers-container">
								<div className="stock-numbers">
									<h1>{Number(data.close).toFixed(2)}</h1>
									<h2
										className={
											Number(data.change) > 0 ? 'green-color' : 'red-color'
										}
									>
										{Number(data.change) > 0
											? `+${Number(data.change).toFixed(2)} (+${Number(
													data.percent_change
											  ).toFixed(2)}%)`
											: `${Number(data.change).toFixed(2)} (${Number(
													data.percent_change
											  ).toFixed(2)}%)`}
									</h2>
								</div>
								<span className="close-time">
									{time >= 17 && time <= 22
										? 'Market Open: ' + data.datetime
										: 'At Close: ' + data.datetime}
								</span>
							</div>
						</div>
						<div className="stock-data-table">
							<table className="table">
								<tbody>
									<tr>
										<td>Previous Close</td>
										<td>{Number(data.previous_close).toFixed(2)}</td>
									</tr>
									<tr className="break" />
									<tr>
										<td>Open</td>
										<td>{Number(data.open).toFixed(2)}</td>
									</tr>
									<tr className="break" />
									<tr>
										<td>Volume</td>
										<td>
											{Number(data.volume)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										</td>
									</tr>
									<tr className="break" />
									<tr>
										<td>Avg. Volume</td>
										<td>
											{Number(data.average_volume)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										</td>
									</tr>
									<tr className="break" />
									<tr>
										<td>Day's Range</td>
										<td>
											{parseFloat(data.low)
												.toFixed(2)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
											-{' '}
											{parseFloat(data.high)
												.toFixed(2)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										</td>
									</tr>
									<tr className="break" />
									<tr>
										<td>52 Week Range</td>
										<td>
											{parseFloat(data.fifty_two_week.low)
												.toFixed(2)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
											-{' '}
											{parseFloat(data.fifty_two_week.high)
												.toFixed(2)
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="graph">
						<MarketSummary
							name={data.name}
							symbol={data.symbol}
							interval={`1min`}
							outputsize={390}
							apikey={apikey}
						/>
					</div>
				</div>
			) : null}
			<NewsCard type="search" keywords={symbol} articelNum={4} />
			<Footer stickToBottom="stick-to-bottom" />
		</>
	);
};
export default StockData;
