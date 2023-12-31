// Przykładowy komponent React
import React from 'react';
import './NewsPage.css';
import he from 'he';

// function NewsPage({ title, excerpt, imageUrl }) {}
function NewsPage({ id, title, imageUrl, excerpt }) {
  let url = "/wiadomosci/" + id
  const decodedTitle = he.decode(title);
  // url+= "" + {id}
  // console.log('id:' + id)
  return (
    <div className="news-item">
      <img src={imageUrl} alt={decodedTitle} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{decodedTitle}</h2>
        <p className="news-excerpt">{excerpt}</p>
        {/* Button lub link do pełnego artykułu */}
        <a href={url} className="news-read-more">Czytaj więcej</a>
      </div>
    </div>
  );
}

export default NewsPage;
