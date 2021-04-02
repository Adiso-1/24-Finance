import './App.css';
import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Watchlist from './components/Watchlist/Watchlist';
import Finance from './components/Finance/Finance';

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
				<div>Watchlist</div>
			</Route>
		</Router>
	);
};

export default App;
