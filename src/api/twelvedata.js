import axios from 'axios';

const KEY = 'f2bdff475b4b4faaa092bd8ad2f3c0e5';
export default axios.create({
	baseURL: 'https://api.twelvedata.com',
});
