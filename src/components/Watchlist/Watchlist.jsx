import React, { useRef, useState } from 'react';
import './Watchlist.css';
import WatchTable from '../WatchTable/WatchTable';
import AddStock from '../AddStock/AddStock';

const Watchlist = () => {
	const [watchlistData, setWatchlistData] = useState([]);
	const [isAdd, setIsAdd] = useState(false);
	const handleAddStock = () => {
		setIsAdd(!isAdd);
	};
	return (
		<div className="watchlist-container">
			<button onClick={handleAddStock}>+ Add Symbol</button>
			{isAdd && <AddStock />}
			<WatchTable />
		</div>
	);
};
export default Watchlist;
