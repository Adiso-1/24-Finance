import './Spinner.css';
const Spinner = () => {
	return (
		<div class="spinner-container">
			<div class="center"></div>

			<div class="inner">
				<div class="inner__item" id="inner__item1"></div>
				<div class="inner__item" id="inner__item2"></div>
				<div class="inner__item" id="inner__item3"></div>
				<div class="inner__item" id="inner__item4"></div>
			</div>

			<div class="outer">
				<div class="outer__item" id="outer__item1"></div>
				<div class="outer__item" id="outer__item2"></div>
				<div class="outer__item" id="outer__item3"></div>
				<div class="outer__item" id="outer__item4"></div>
			</div>
			<div class="loading">
				Loading
				<span class="loading__dot">.</span>
				<span class="loading__dot">.</span>
				<span class="loading__dot">.</span>
			</div>
		</div>
	);
};
export default Spinner;
