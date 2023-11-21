// Przykładowy komponent React
import React from 'react';
import './NewsItem.css';

function NewsItem({ title, excerpt, imageUrl }) {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-excerpt">{excerpt}</p>
        {/* Button lub link do pełnego artykułu */}
        <a href="/link-do-artykulu" className="news-read-more">Czytaj więcej</a>
      </div>
    </div>
  );
}

export default NewsItem;
