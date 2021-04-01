import React, { useEffect, useState } from 'react';
import newsApi from '../api/newsApi';
import NewsCard from './NewsCard';

const Home = () => {
	const [articles, setArticles] = useState([]);
	const generalCategory =
		'/top-headlines?country=us&apiKey=fe2ce523f8bf473bb146bf06e0a82a4c';
	useEffect(() => {
		try {
			const fetch = async () => {
				const { data } = await newsApi.get(`${generalCategory}`);
				setArticles(data.articles);
			};

			fetch();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return <div>{<NewsCard articles={articles} />}</div>;
};

export default Home;
