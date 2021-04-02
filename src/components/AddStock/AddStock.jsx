import { useState } from 'react';
import './AddStock.css';
const AddStock = () => {
	const [stock, setStock] = useState('');

	const handleChange = (e) => {
		setStock(e.target.value);
	};
	const onSearch = () => {
		console.log(stock);
	};
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
		</div>
	);
};
export default AddStock;
