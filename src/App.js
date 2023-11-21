import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Hook stanu do przechowywania elementów menu
  const [menuItems, setMenuItems] = useState([]);

  // Hook efektu do ładowania danych menu z pliku JSON przy pierwszym renderowaniu
  useEffect(() => {
    fetch('/json_static/menu.json') // Ścieżka do pliku JSON
      .then(response => response.json()) // Parsowanie odpowiedzi jako JSON
      .then(data => setMenuItems(data)) // Aktualizacja stanu menuItems danymi z JSON
      .catch(error => console.error("Fetching menu failed:", error));
  }, []); // Pusta tablica jako drugi argument oznacza, że efekt uruchomi się tylko raz

  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;