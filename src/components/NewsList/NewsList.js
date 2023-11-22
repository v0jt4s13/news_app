// NewsList.js
import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';

const endpoint = '/json_static/articles.json';
function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Pobierz dane z endpointa
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint + '');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Pusty array jako drugi argument oznacza, że effect uruchomi się tylko raz po zamontowaniu komponentu

  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsItem
          key={article.id}
          title={article.title}
          excerpt={article.excerpt} // 'excerpt' powinien być dostarczony w JSON
          imageUrl={article.images[0]?.img_url || 'placeholder-image-url'} // Użyj placeholdera jeśli nie ma obrazka
        />
      ))}
    </div>
  );
}

export default NewsList;
