import './App.css';
import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import Finance from './components/Finance';

class App extends react.Component {
	render() {
		return (
			<Router>
				<Header />
				<Route exact path="/">
					<div></div>
				</Route>
				<Route exact path="/finance">
					<div>Finance</div>
				</Route>
				<Route exact path="/watchlist">
					<div>Watchlist</div>
				</Route>
			</Router>
		);
	}
}

export default App;
