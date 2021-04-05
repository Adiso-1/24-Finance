import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './WatchTable.css';

const WatchTable = (props) => {
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
								className="fas fa-trash"
							></i>
						</td>
						<td className="edit">
							<i
								onClick={(e) => props.editStock(e, el)}
								className="far fa-edit"
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
			{createTable(props.data)}
		</table>
	);
};
export default WatchTable;
