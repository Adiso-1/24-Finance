import axios from 'axios';
// KEY1 = 'f2bdff475b4b4faaa092bd8ad2f3c0e5';
// KEY2 = '8a95a209d3424afd86179d7911286784';
// KEY3 = '9f63c36568334145bd8d55f22294761a';

export default axios.create({
	baseURL: 'https://api.twelvedata.com/',
});
