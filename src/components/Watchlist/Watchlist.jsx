import React, { useState, useEffect } from 'react';
import mockApi from '../../api/mockApi';
import twelveData from '../../api/twelvedata';
import './Watchlist.css';
import WatchTable from '../WatchTable/WatchTable';
import AddStock from '../AddStock/AddStock';
import EditStock from '../EditStock/EditStock';
import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';

const Watchlist = () => {
	const [tempStock, setTempStock] = useState({});
	const [isAdd, setIsAdd] = useState(false);
	const [stocksData, setStocksData] = useState([]);
	const [isEdit, setIsEdit] = useState(false);

	console.log(stocksData);
	//! READ
	const retrieveStocks = async () => {
		const { data } = await mockApi.get('/watchlist');
		const x = await Promise.all(
			data.map(async (el, i) => {
				const response = await twelveData.get('/quote?', {
					params: {
						symbol: el.symbol,
						// apikey: 'f2bdff475b4b4faaa092bd8ad2f3c0e5',
						apikey: '8a95a209d3424afd86179d7911286784',
					},
				});
				const obj = {
					...data[i],
					marketValue:
						data[i].shares * parseFloat(response.data.close).toFixed(2),
					price: parseFloat(response.data.close).toFixed(2),
					lastChange: parseFloat(response.data.percent_change).toFixed(2),
				};
				return obj;
			})
		);
		setStocksData(x);
		return data;
	};
	//! CREATE
	const addStock = async (stock) => {
		const { data } = await mockApi.post('/watchlist', {
			symbol: stock,
			shares: 0,
		});
		setStocksData([...stocksData, data]);
		await retrieveStocks();
		setIsAdd(false);
	};
	//! DELETE
	const removeStock = async (id) => {
		await mockApi.delete(`/watchlist/${id}`);
		const newStockList = stocksData.filter((stock) => {
			return stock.id !== id;
		});
		setStocksData(newStockList);
	};
	//! EDIT
	const editStock = async (e, stock, newStock) => {
		setTempStock(stock);
		// console.log(e, stock, newStock);
		setIsEdit(!isEdit);
	};
	const finalEdit = async (stock) => {
		console.log(stock);
		const response = await mockApi.put(`/watchlist/${stock.id}`, stock);
		const { id, symbol, shares } = response.data;
		setStocksData(
			stocksData.map((stock) => {
				return stock.id === id ? { ...response.data } : stock;
			})
		);
	};
	useEffect(() => {
		const getAllStocks = async () => {
			await retrieveStocks();
		};
		getAllStocks();
	}, []);

	const handleAddStock = async () => {
		setIsAdd(!isAdd);
	};

	return (
		<div>
			<h1 className="watchlist-header">My Watchlist</h1>
			<div className="watchlist-container">
				<button onClick={handleAddStock}>+ Add Symbol</button>
				{isAdd && <AddStock getStock={(stock) => addStock(stock)} />}
				{stocksData.length > 0 ? (
					<WatchTable
						removeStock={(id) => removeStock(id)}
						editStock={(e, stock, newStock) => editStock(e, stock, newStock)}
						data={stocksData}
					/>
				) : null}
			</div>
			{isEdit && (
				<EditStock
					stock={tempStock}
					setIsEdit={setIsEdit}
					finalEdit={finalEdit}
				/>
			)}
			<div>
				<hr />
				<section>
					<h1 className="portfolio-news-header">Portfolio News</h1>
					{stocksData.length > 0
						? stocksData.map((el) => {
								return (
									<div className="news-for-watchlist">
										<h5>Because you follow {el.symbol}</h5>
										<NewsCard
											type="search"
											category="trading"
											articelNum={3}
											keywords={el.symbol}
										/>
									</div>
								);
						  })
						: null}
					<NewsCard />
				</section>
				<Footer />
			</div>
		</div>
	);
};
export default Watchlist;
