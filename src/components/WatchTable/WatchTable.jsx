import './WatchTable.css';
import { Link } from 'react-router-dom';

const WatchTable = (props) => {
	const createTable = (arg) => {
		return arg.map((el) => {
			return (
				<tbody key={el.id}>
					<tr>
						<td className="symbol">
							<Link to={{ pathname: `/watchlist/${el.symbol}` }}>
								{el.symbol}
							</Link>
						</td>
						<td className="shares">{el.shares}</td>
						<td className="price">{el.price}</td>
						<td className="market-value">{el.marketValue}</td>
						<td
							className={
								Number(el.lastChange) > 0
									? 'last-change green'
									: 'last-change red'
							}
						>
							{el.lastChange}%
						</td>
						<td className="delete">
							<i
								onClick={() => props.removeStock(el.id)}
								className="fas fa-trash"
							></i>
						</td>
						<td className="edit">
							<i
								onClick={(e) => {
									props.editStock(e, el);
								}}
								className="far fa-edit"
							></i>
						</td>
					</tr>
					<tr className="break"></tr>
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
