import { useEffect, useState } from 'react';
import twelveData from '../../api/twelvedata';
import './AddStock.css';

const AddStock = (props) => {
	const [stock, setStock] = useState('');
	const [stockPicked, setStockPicked] = useState([]);
	const [stocksList, setStocksList] = useState([]);
	const [debouncedTerm, setDebouncedTerm] = useState(stock);
	const [isStockWatched, setIsStockWatched] = useState(false);

	const handleChange = (e) => {
		setStock(e.target.value);
	};
	const onSearch = (stock) => {
		if (stockPicked.includes(stock)) {
			setTimeout(() => {
				setIsStockWatched(false);
			}, 2000);
			setIsStockWatched(true);
		} else {
			const temp = [...stockPicked];
			temp.push(stock);
			setStockPicked(temp);
			props.getStock(stock);
		}
	};

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(stock);
		}, 200);
		return () => {
			clearTimeout(timerId);
		};
	}, [stock]);

	useEffect(() => {
		const search = async () => {
			const { data } = await twelveData.get(
				`/symbol_search?symbol=${stock.toLowerCase()}`
			);
			let filterData = data.data.filter(
				(el) =>
					el.country === 'United States' &&
					el.symbol.toLowerCase().includes(stock.toLowerCase())
			);
			if (filterData.length === 0) {
				filterData = data.data.filter(
					(el) =>
						el.country === 'United States' &&
						el.instrument_name.toLowerCase().includes(stock.toLowerCase())
				);
			}
			setStocksList(filterData.slice(0, 10));
		};
		if (stock) {
			search();
		}
	}, [debouncedTerm]);

	return (
		<div className="add-stock-container">
			<div className="add-stock-input-container">
				<input
					className="add-stock-input"
					placeholder="AAPL, TSLA, SPY..."
					type="text"
					value={stock}
					onChange={handleChange}
				/>
				<i className="fas fa-search search-btn"></i>
			</div>
			<p className="add-stock-instructions">Enter symbols or company names</p>
			{debouncedTerm && (
				<div className="searched-stocks-container">
					<h3>Symbols</h3>
					{stocksList.map((el, index) => {
						const arrEl = [
							el.symbol,
							el.instrument_name,
							el.exchange,
							el.instrument_type,
						];
						return (
							<div className="result-stock-row" key={index}>
								{arrEl.map((el, i) => {
									return (
										<span
											key={i}
											onClick={(e) =>
												onSearch(
													e.target.parentElement.firstElementChild.innerHTML
												)
											}
										>
											{el}
										</span>
									);
								})}
								{/* 								
								<span
									onClick={(e) =>
										onSearch(e.target.parentElement.firstElementChild.innerHTML)
									}
								>
									{el.symbol}
								</span>
								<span
									onClick={(e) =>
										onSearch(e.target.parentElement.firstElementChild.innerHTML)
									}
								>
									{el.instrument_name}
								</span>
								<span
									onClick={(e) =>
										onSearch(e.target.parentElement.firstElementChild.innerHTML)
									}
								>
									{el.exchange}
								</span>
								<span
									onClick={(e) =>
										onSearch(e.target.parentElement.firstElementChild.innerHTML)
									}
								>
									{el.instrument_type}
								</span> */}
							</div>
						);
					})}
					{isStockWatched && (
						<div className="watchlist-add-error">
							STOCK IS IN WATCH LIST ALREADY
						</div>
					)}
				</div>
			)}
		</div>
	);
};
export default AddStock;
