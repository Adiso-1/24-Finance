import axios from 'axios';
const API_KEY = '8AK5re_Fbv2RyA3NQtg5iODtPj4yIaNJbTap0prfv8ayYnSX';
export default axios.create({
	baseURL: 'https://api.currentsapi.services/v1/',
});
