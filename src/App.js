import React, { useState, useEffect } from 'react';
import logo from './londynek_logo_square_192.png';
import './App.css';
import NewsList from './components/NewsList/NewsList';
import FileList from './components/FileList/FileList';
import AddAdForm from './components/AddAdForm/AddAdForm'; // Dodano import formularza
import AdsList from './components/AdsList/AdsList'; // Dodano import listy ogłoszeń

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/json_static/menu.json')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error("Fetching menu failed:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <main>
        <NewsList />
        {/* Możesz dodać więcej komponentów NewsItem tutaj */}
        
        {/* Dodano formularz dodawania ogłoszenia */}
        <AddAdForm />

        {/* Dodano listę ogłoszeń */}
        <AdsList />
      </main>
      
      <footer>
        <FileList />
      </footer>
    </div>
  );
}

export default App;
