import React, { useEffect, useState } from 'react';
import './WatchTable.css';

const Watchlist = () => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		console.log('effect');
	}, []);
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
			<tbody>
				<tr>
					<td>A</td>
					<td>B</td>
					<td>C</td>
					<td>D</td>
					<td>E</td>
				</tr>
			</tbody>
		</table>
	);
};
export default Watchlist;
