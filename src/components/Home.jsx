import React, { useEffect, useState } from 'react';
import newsApi from '../api/newsApi';
import NewsCard from './NewsCard';

const Home = () => {
	const [articles, setArticles] = useState([]);
	console.log(articles);

	useEffect(() => {
		try {
			const fetch = async () => {
				const { data } = await newsApi.get(`/latest-news?`, {
					params: {
						language: 'en',
						apiKey: '8AK5re_Fbv2RyA3NQtg5iODtPj4yIaNJbTap0prfv8ayYnSX',
					},
				});
				setArticles(data.news);
			};
			fetch();
		} catch (error) {
			console.log(error);
		}
	}, []);
	return <div>{<NewsCard articles={articles} />}</div>;
};

export default Home;
