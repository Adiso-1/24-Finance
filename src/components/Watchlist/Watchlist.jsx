import React, { useState, useEffect } from 'react';
import mockApi from '../../api/mockApi';
import './Watchlist.css';
import WatchTable from '../WatchTable/WatchTable';
import AddStock from '../AddStock/AddStock';
import Footer from '../Footer/Footer';

const Watchlist = () => {
	const [isAdd, setIsAdd] = useState(false);
	const [stocksData, setStocksData] = useState([]);
	console.log(stocksData);
	//! READ
	const retrieveStocks = async () => {
		const { data } = await mockApi.get('/watchlist');
		return data;
	};
	//! CREATE
	const addStock = async (stock) => {
		const { data } = await mockApi.post('/watchlist', {
			symbol: stock,
			shares: 0,
		});
		setStocksData([...stocksData, data]);
		setIsAdd(false);
	};
	//! DELETE
	const removeStock = async () => {};

	useEffect(() => {
		const getAllStocks = async () => {
			const allStocks = await retrieveStocks();
			if (allStocks) {
				setStocksData(allStocks);
			}
		};
		getAllStocks();
	}, []);

	const handleAddStock = async () => {
		setIsAdd(!isAdd);
	};

	return (
		<div>
			<div className="watchlist-container">
				<button onClick={handleAddStock}>+ Add Symbol</button>
				{isAdd && <AddStock getStock={(stock) => addStock(stock)} />}
				{stocksData.length > 0 && <WatchTable data={stocksData} />}
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
export default Watchlist;
