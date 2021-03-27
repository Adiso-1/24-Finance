import React from 'react';
import newsApi from '../api/newsApi';

import NewsCard from './NewsCard';

class Home extends React.Component {
	state = { articles: [] };

	generalCategory =
		'/top-headlines?country=us&apiKey=fe2ce523f8bf473bb146bf06e0a82a4c';
	async componentDidMount() {
		try {
			const { data } = await newsApi.get(`${this.generalCategory}`);
			this.setState({ articles: data.articles });
		} catch (error) {
			console.log(error);
		}
	}
	render() {
		return <div>{<NewsCard articles={this.state.articles} />}</div>;
	}
}
export default Home;
