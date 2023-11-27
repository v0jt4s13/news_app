import React, { useState, useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';

const endpoint = '/json_static/articles.json';
// const endpoint = 'http://localhost/v1/news';

function NewsList() {
  const [articles, setArticles] = useState([]);

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
      {articles.map((news, index) => (
        <NewsItem
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


// data = {
//   "object": "list",
//   "package": "news",
//   "data": [
//       {
//           "id": 98269,
//           "release_date": "2023-11-24 08:15:00",
//           "category_name": "Świat",
//           "images": "url https://assets.aws.londynek.net/images/jdnews-agency/2191248/371865-202311240808-lg.jpg alt {W połowie listopada Narodowa Komisji Zdrowia informowała o wzroście zachorowalności na choroby układu oddechowego w Chinach i ostrzegła, że kraj doświadcza obecnie szczytu sezonowych chorób tego typu. (Fot. CNS/AFP via Getty Images)}",
//           "title": "Czy Chiny ukrywają epidemię? Niewyjaśniony wzrost infekcji płuc, zwłaszcza wśród dzieci"
//       },
//       {
//           "id": 98273,
//           "release_date": "2023-11-24 08:00:00",
//           "category_name": "Sport",
//           "images": "url https://assets.aws.londynek.net/images/jdnews-agency/2191248/371863-202311240723-lg.jpg alt {Przywrócił blask Barcelonie i wciąż mierzy wysoko - Lewandowski to wciąż światowa marka. (Fot. Getty Images)}",
//           "title": "Lewandowski odebrał nagrodę dla najlepszego strzelca"
//       }
//   ],
//   "has_more": true
// }