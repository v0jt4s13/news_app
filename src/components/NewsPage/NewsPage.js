import React from 'react';
import './NewsPage.css';
import he from 'he';

/**
 * Komponent reprezentujący pojedynczą pozycję wiadomości na stronie.
 * @param {object} props - Właściwości komponentu.
 * @param {string} props.id - Unikalny identyfikator wiadomości.
 * @param {string} props.title - Tytuł wiadomości.
 * @param {string} props.imageUrl - Adres URL obrazka wiadomości.
 * @param {string} props.excerpt - Krótki opis wiadomości.
 * @returns {JSX.Element} - Element JSX reprezentujący pojedynczą wiadomość.
 */
function NewsPage({ id, title, imageUrl, excerpt }) {
  // Budowanie URL do pełnego artykułu na podstawie ID
  let url = "/article/" + id;

  // Dekodowanie tytułu wiadomości z encji HTML
  const decodedTitle = he.decode(title);

  return (
    <div className="news-item">
      {/* Wyświetlanie obrazka wiadomości */}
      <img src={imageUrl} alt={decodedTitle} className="news-image" />
      
      <div className="news-content">
        {/* Wyświetlanie tytułu wiadomości */}
        <h2 className="news-title">{decodedTitle}</h2>
        
        {/* Wyświetlanie krótkiego opisu wiadomości */}
        <p className="news-excerpt">{excerpt}</p>
        
        {/* Button lub link do pełnego artykułu */}
        <a href={url} className="news-read-more">Czytaj więcej</a>
      </div>
    </div>
  );
}

export default NewsPage;
