import React, { useEffect, useState } from 'react';
import twelvedata from '../../api/twelvedata';
import './WatchTable.css';

const WatchTable = (props) => {
	const [dataToTable, setDataToTable] = useState([]);
	const tableData = [...props.data];

	useEffect(() => {
		console.log(`props:  ${props.data}`);
		console.log(`state:  ${dataToTable}`);

		props.data.map((el, i) => {
			const fetchData = async () => {
				const { data } = await twelvedata.get('/quote?', {
					params: {
						symbol: el.symbol,
						apikey: 'f2bdff475b4b4faaa092bd8ad2f3c0e5',
					},
				});
				tableData[i].price = data.close;
				tableData[i].lastChange = data.percent_change;
			};
			fetchData();
		});
		setDataToTable(tableData);
	}, [props.data]);

	const createTable = (arg) => {
		console.log(arg);
		return arg.map((el) => {
			console.log(el);
			return (
				<tbody key={el.id}>
					<tr>
						<td className="symbol">{el.symbol}</td>
						<td className="shares">0</td>
						<td className="price">{el.price}</td>
						<td className="market-value">0</td>
						<td className="last-change">{el.lastChange}%</td>
					</tr>
				</tbody>
			);
		});
	};
	return (
		<table className="watchlist-table">
			<thead>
				<tr>
					<th>Symbol</th>
					<th>Shares</th>
					<th>Price</th>
					<th>Market Value</th>
					<th>Last Change</th>
				</tr>
			</thead>
			{dataToTable.length > 0 ? createTable(dataToTable) : null}
		</table>
	);
};
export default WatchTable;
