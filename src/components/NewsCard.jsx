import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
	const news = props.articles.map((el, i) => {
		return (
			<div className="news-card" key={i}>
				<div className="all-news-card-contnet">
					<img src={el.urlToImage} alt="UNAVAILABLE" />
					<div className="content">
						<p className="card-title">{el.title}</p>
						<p className="card-content">{el.content}</p>
					</div>
				</div>
				<a href={el.url}>Read More..</a>
			</div>
		);
	});
	return <div className="news-card-grid-container">{news}</div>;
};
export default NewsCard;
