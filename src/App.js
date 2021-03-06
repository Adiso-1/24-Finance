import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Watchlist from './components/Watchlist/Watchlist';
import Finance from './components/Finance/Finance';
import StockData from './components/StockData/StockData.jsx';

const App = () => {
	return (
		<Router>
			<Header />
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/finance">
				<Finance />
			</Route>
			<Route exact path="/watchlist">
				<Watchlist />
			</Route>
			<Route exact path="/watchlist/:symbol">
				<StockData />
			</Route>
		</Router>
	);
};

export default App;
