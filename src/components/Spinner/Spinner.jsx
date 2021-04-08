import './Spinner.css';
const Spinner = () => {
	return (
		<div className="spinner-container">
			<div className="center"></div>

			<div className="inner">
				<div className="inner__item" id="inner__item1"></div>
				<div className="inner__item" id="inner__item2"></div>
				<div className="inner__item" id="inner__item3"></div>
				<div className="inner__item" id="inner__item4"></div>
			</div>

			<div className="outer">
				<div className="outer__item" id="outer__item1"></div>
				<div className="outer__item" id="outer__item2"></div>
				<div className="outer__item" id="outer__item3"></div>
				<div className="outer__item" id="outer__item4"></div>
			</div>
			{/* <div className="loading">
				Loading
				<span className="loading__dot">.</span>
				<span className="loading__dot">.</span>
				<span className="loading__dot">.</span>
			</div> */}
		</div>
	);
};
export default Spinner;
