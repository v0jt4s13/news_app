// components/NewsList/NewsList.js

import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    // Tutaj umieść logikę pobierania danych newsów z pliku JSON
    // Poniżej znajduje się przykładowa ścieżka do pliku JSON

    // W rzeczywistości, użyj fetch lub innej metody do pobrania danych z pliku JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/json_static/articles.json');
        const data = await response.json();

        const sampleNewsList = data.articles;

        // Oblicz indeks początkowy dla aktualnej strony
        const startIndex = (currentPage - 1) * itemsPerPage;
        // Pobierz tylko newsy dla aktualnej strony
        const displayedNews = sampleNewsList.slice(startIndex, startIndex + itemsPerPage);

        setNewsList(displayedNews);
      } catch (error) {
        console.error("Fetching news failed:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Strona {currentPage}</span>
        {/* Licznik strony */}
        {Array.from({ length: Math.ceil(newsList.length / itemsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', justifyContent: 'center' }}>
        {newsList.map((news) => (
          <NewsItem
            key={news.id}
            title={news.title}
            content={news.title} // Używamy tytułu jako treści, możesz to dostosować
            imageUrl={news.images && news.images.length > 0 ? news.images[0].img_url : ''}
          />
        ))}
      </div>
    </div>
  );
};
export default NewsList;
