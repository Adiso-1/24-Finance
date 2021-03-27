import React from 'react';
import './NewsCard.css';
import imageUnavailable from '../images/image-unavailable-icon.jpg';

class NewsCard extends React.Component {
	render() {
		const news = this.props.articles.map((el, i) => {
			return (
				<div className="news-card" key={i}>
					<div className="all-news-card-contnet">
						<img
							src={el.urlToImage}
							// alt="UNAVAILABLE"
							onError={(e) => (
								(e.target.onerror = null), (e.target.src = { imageUnavailable })
							)}
						/>
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
	}
}
export default NewsCard;
