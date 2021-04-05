import React, { useEffect, useState } from 'react';
import defaultImg from '../../images/image-unavailable-icon.jpg';
import newsApi from '../../api/newsApi';
import './NewsCard.css';

const NewsCard = (props) => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		try {
			const fetch = async () => {
				const { data } = await newsApi.get(`/${props.type}?`, {
					params: {
						category: props.category,
						keywords: props.keywords || '',
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

	const news = articles
		.filter((el) => el.image !== 'None')
		.map((el, i) => {
			if (props.articelNum > i) {
				return (
					<div className="news-card" key={el.id}>
						<div className="all-news-card-contnet">
							<img
								src={el.image === 'None' ? defaultImg : el.image}
								alt="UNAVAILABLE"
							/>
							<div className="content">
								<p className="card-title">{el.title}</p>
								<p className="card-content">{el.description}</p>
							</div>
						</div>
						<a href={el.url}>Read More..</a>
					</div>
				);
			}
		});
	return <div className="news-card-grid-container">{news}</div>;
};
export default NewsCard;
