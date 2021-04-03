import { useEffect, useState } from 'react';
import twelveData from '../../api/twelvedata';
import axios from 'axios';
import './AddStock.css';

const AddStock = (props) => {
	const [stock, setStock] = useState('');
	const [stockPicked, setStockPicked] = useState('');
	const [stocksList, setStocksList] = useState([]);
	const [debouncedTerm, setDebouncedTerm] = useState(stock);

	const handleChange = (e) => {
		setStock(e.target.value);
	};
	const onSearch = (stock) => {
		props.getStock(stock);
	};
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(stock);
		}, 0);
		return () => {
			clearTimeout(timerId);
		};
	}, [stock]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://api.twelvedata.com/stocks?source=account'
			);
			let filterData = data.data.filter((el) =>
				el.symbol.toLowerCase().includes(stock.toLowerCase())
			);
			if (filterData.length === 0) {
				filterData = data.data.filter((el) =>
					el.name.toLowerCase().includes(stock.toLowerCase())
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
						return (
							<div
								onClick={(e) =>
									onSearch(e.target.parentElement.firstElementChild.innerText)
								}
								className="result-stock-row"
								key={index}
							>
								<span> {el.symbol}</span>
								<span>{el.name}</span>
								<span>{el.exchange}</span>
								<span>{el.type}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default AddStock;
