import React, { useRef, useState } from 'react';
import './Watchlist.css';
import WatchTable from '../WatchTable/WatchTable';
import AddStock from '../AddStock/AddStock';

const Watchlist = () => {
	const [watchlistData, setWatchlistData] = useState([]);
	const [isAdd, setIsAdd] = useState(false);

	const handleAddStock = async (value) => {
		setIsAdd(!isAdd);
	};
	const getStock = async (stock) => {
		if (watchlistData.includes(stock)) {
			return null;
		}
		const tempArr = [...watchlistData];
		tempArr.push(stock);
		await setWatchlistData(tempArr);
		setIsAdd(false);
	};
	return (
		<div className="watchlist-container">
			<button onClick={handleAddStock}>+ Add Symbol</button>
			{isAdd && <AddStock getStock={(stock) => getStock(stock)} />}
			<WatchTable watchlistData={watchlistData} />
		</div>
	);
};
export default Watchlist;
