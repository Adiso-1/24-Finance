import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
	const news = props.articles.map((el, i) => {
		return (
			<div className="news-card" key={props.id}>
				<div className="all-news-card-contnet">
					<img src={el.image} alt="UNAVAILABLE" />
					<div className="content">
						<p className="card-title">{el.title}</p>
						<p className="card-content">{el.description}</p>
					</div>
				</div>
				<a href={el.url}>Read More..</a>
			</div>
		);
	});
	return <div className="news-card-grid-container">{news}</div>;
};
export default NewsCard;
