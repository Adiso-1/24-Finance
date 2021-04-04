import { useState } from 'react';

const EditStock = () => {
	const [stock, setStock] = useState({ shares: 0 });

	return (
		<div>
			<input
				onChange={(e) => setStock({ shares: e.target.value })}
				type="text"
			/>
		</div>
	);
};
export default EditStock;
