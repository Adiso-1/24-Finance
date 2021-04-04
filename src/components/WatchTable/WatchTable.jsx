import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import twelvedata from '../../api/twelvedata';
import './WatchTable.css';

const WatchTable = (props) => {
	const [dataToTable, setDataToTable] = useState([]);

	const tableData = [...props.data];
	useEffect(() => {
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
		return arg.map((el) => {
			return (
				<tbody key={el.id}>
					<tr>
						<td className="symbol">{el.symbol}</td>
						<td className="shares">
							<input
								className="shares-input"
								defaultValue={el.shares}
								type="number"
								min={0}
							/>
						</td>
						<td className="price">{el.price}</td>
						<td className="market-value">
							{Number(el.shares) * Number(el.price)}
						</td>
						<td className="last-change">{el.lastChange}%</td>
						<td className="delete">
							<i
								onClick={() => props.removeStock(el.id)}
								class="fas fa-trash"
							></i>
						</td>
						<td className="edit">
							<i
								onClick={(e) => props.editStock(e, el)}
								class="far fa-edit"
							></i>
						</td>
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
