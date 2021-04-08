import './PieChart.css';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {
	const names = props.data.map((el) => el.name);
	const values = props.data.map((el) => Math.round(el.marketValue));

	return (
		<div className="pie-chart">
			<Pie
				data={{
					labels: names,
					datasets: [
						{
							label: 'My First Dataset',
							data: values,
							backgroundColor: [
								'#A2C9E9',
								'#F6DEA3',
								'#CDCDC7',
								'#F2C19E',
								'#F59FA5',
								'#D4B9A9',
								'#C2AAE6',
								'#EAA1C9',
								'#ACD5CC',
								'#BEBEBA',
							],
							hoverOffset: 4,
						},
					],
				}}
				height={200}
				width={200}
				options={{
					animation: {
						animateScale: true,
						animateRotate: true,
					},
					responsive: false,
					legend: {
						display: false,
					},
				}}
			/>
		</div>
	);
};
export default PieChart;
