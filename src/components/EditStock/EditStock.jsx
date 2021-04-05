import { useState, useRef, useEffect } from 'react';
import './EditStock.css';

const EditStock = (props) => {
	const [shares, setShares] = useState(props.stock.shares);
	const ref = useRef();
	useEffect(() => {
		ref.current.focus();
	}, []);
	const newStock = { ...props.stock };
	const handleClick = () => {
		newStock.shares = Number(shares);
		newStock.marketValue = Number(shares) * Number(newStock.price);
		return props.finalEdit(newStock);
	};
	return (
		<div className="edit-container">
			<h2>Edit {props.stock.symbol} Shares</h2>
			<i
				onClick={() => props.setIsEdit(false)}
				className="far fa-window-close fa-3x"
			></i>
			<div className="edit-data">
				<p>Symbol: {props.stock.symbol}</p>
				<p>Current: {props.stock.shares}</p>
				<div className="input">
					<label htmlFor="input">Shares: </label>
					<input
						id="input"
						ref={ref}
						onChange={(e) => setShares(e.target.value)}
						value={shares}
						type="number"
						min={0}
					/>
				</div>
			</div>
			<div className="button-container">
				<button
					onClick={(e) => {
						handleClick();
						props.setIsEdit(false);
					}}
					onKeyPress={(e) => {
						console.log(e.target);
					}}
				>
					Update
				</button>
			</div>
		</div>
	);
};
export default EditStock;
