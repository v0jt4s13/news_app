import React, { useState, useEffect } from 'react';
import NewsPage from '../NewsPage/NewsPage';

// Endpoint do pobierania danych artykułów
const endpoint = 'https://londynek.net/v1/news';

/**
 * Komponent reprezentujący listę artykułów.
 * @component
 * @returns {JSX.Element} - Element JSX reprezentujący listę artykułów.
 */
function NewsList() {
  // Stan przechowujący listę artykułów
  const [articles, setArticles] = useState([]);

  // Efekt pobierający dane artykułów z API przy pierwszym renderowaniu
  useEffect(() => {
    // Pobierz dane z endpointa
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        // Ustaw artykuły korzystając z właściwości 'data' z pobranych danych
        setArticles(data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // Pusty array jako drugi argument oznacza, że effect uruchomi się tylko raz po zamontowaniu komponentu

  return (
    <div className="NewsList">
      <div className="module-info">===&gt;from NewsList&lt;===</div>
      {articles.map((news, index) => (
        // Renderuj komponent NewsPage dla każdego artykułu
        <NewsPage
          key={index} // Dodaj klucz 'key' dla każdego elementu listy
          id={news.id}
          title={news.title}
          excerpt={news.release_date} // Zmieniono na 'release_date' dla przykładu
          imageUrl={news.images[0].url} // Ustawienie URL obrazka
        />
      ))}
    </div>
  );
}

export default NewsList;
