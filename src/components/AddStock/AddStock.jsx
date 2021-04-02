import { useEffect, useState } from 'react';
import twelveData from '../../api/twelvedata';
import axios from 'axios';
import './AddStock.css';

const AddStock = (props) => {
	const [stock, setStock] = useState('');
	const [stocksList, setStocksList] = useState([]);
	const [debouncedTerm, setDebouncedTerm] = useState(stock);

	const handleChange = (e) => {
		setStock(e.target.value);
	};

	const onSearch = () => {
		props.getStock(stock);
	};

	useEffect(() => {
		const timerId = setTimeout(() => {
			console.log('setbounce');
			setDebouncedTerm(stock);
		}, 500);
		return () => {
			console.log('timer');
			clearTimeout(timerId);
		};
	}, [stock]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get(
				'https://api.twelvedata.com/stocks?source=account'
			);
			let filterData = data.data.filter((el) =>
				el.name.toLowerCase().includes(stock.toLowerCase())
			);
			if (filterData.length === 0) {
				filterData = data.data.filter((el) =>
					el.symbol.toLowerCase().includes(stock.toLowerCase())
				);
			}
			console.log(filterData);
			setStocksList(filterData);
		};
		search();
	}, [debouncedTerm]);

	return (
		<div className="add-stock-container">
			<div className="add-stock-input-container">
				<input
					className="add-stock-input"
					placeholder="AAPL, TSLA, SPY"
					type="text"
					value={stock}
					onChange={handleChange}
				/>
				<i onClick={onSearch} className="fas fa-search search-btn"></i>
			</div>
			<p className="add-stock-instructions">Enter symbols or company names</p>
			{debouncedTerm && (
				<div>
					{stocksList.map((el) => {
						return (
							<div key={el.symbol}>
								<span>{el.name}</span>
								<span> {el.symbol}</span>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
export default AddStock;
