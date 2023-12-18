import React, { useState, useEffect } from 'react';
import logo from '../../londynek_logo_square_192.png';
import './HomePage.css';
import NewsList from '../NewsList/NewsList.js';

/**
 * Komponent reprezentujący stronę domową.
 * 
 * Wykorzystuje Hooki useState i useEffect do zarządzania stanem
 * oraz efektem ładowania danych menu z pliku JSON.
 * @component
 * @returns {JSX.Element} - Element JSX reprezentujący stronę domową.
 */
function HomePage() {
  // Ścieżka do pliku JSON z danymi menu
  const endpoint = '/json_static/menu.json';
  // Stan przechowujący elementy menu
  const [menuItems, setMenuItems] = useState([]);

  // Efekt ładowania danych menu z pliku JSON przy pierwszym renderowaniu
  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error("Fetching menu failed:", error));
  }, []); // Pusta tablica jako drugi argument oznacza, że efekt uruchomi się tylko raz

  return (
    <div className="HomePage">
      {/* Informacja debugująca */}
      <div className="module-info">===&gt;from HomePage&lt;===</div>
      
      {/* Nagłówek strony */}
      <header className="HomePage-header">
        {/* Logo strony */}
        <img src={logo} className="HomePage-logo" alt="logo" />
        
        {/* Lista elementów menu */}
        <ul>
          {menuItems.map((item, index) => (
            // Tworzenie listy elementów menu
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Sekcja z listą newsów */}
      <h1>Lista newsów</h1>
      <main>
        <NewsList />
        {/* Możesz dodać więcej komponentów NewsPage tutaj <h1>{NewsPage.key}</h1> nie działa ;/ */}
      </main>

      {/* Stopka strony */}
      <footer>
        FileList
      </footer>
    </div>
  );
}

export default HomePage;
