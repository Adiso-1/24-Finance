import React, { useEffect, useState } from 'react';
import defaultImg from '../../images/image-unavailable-icon.jpg';
import newsApi from '../../api/newsApi';
import Spinner from '../Spinner/Spinner';
import './NewsCard.css';

const NewsCard = (props) => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		try {
			setIsLoading(true);
			const fetch = async () => {
				const { data } = await newsApi.get(`/${props.type}?`, {
					params: {
						category: props.category,
						keywords: props.keywords || '',
						apiKey: '8AK5re_Fbv2RyA3NQtg5iODtPj4yIaNJbTap0prfv8ayYnSX',
					},
				});
				setArticles(data.news);
				setIsLoading(false);
			};
			fetch();
		} catch (error) {
			console.log('SOMETHING WENT WRONG');
			console.log(error);
		}
	}, []);

	const news = articles
		.filter((el) => el.image !== 'None')
		.map((el, i) => {
			if (props.articelNum > i) {
				return (
					<div className="news-card" key={el.id}>
						<div className="all-news-card-contnet">
							<a target="_blank" href={el.url}>
								<img
									className="news-image"
									src={el.image === 'None' ? defaultImg : el.image}
									// src={el.image}
									alt="UNAVAILABLE"
								/>
							</a>
							<div className="content">
								<a target="_blank" href={el.url}>
									<p className="card-title">{el.title}</p>
								</a>
								<p className="card-content">{el.description}</p>
							</div>
						</div>
						<a target="_blank" className="link" href={el.url}>
							Read More..
						</a>
					</div>
				);
			}
		});
	return (
		<>
			{news.length > 0 ? (
				<div className="news-card-grid-container">{news}</div>
			) : (
				<Spinner />
			)}
		</>
	);
};
export default NewsCard;
