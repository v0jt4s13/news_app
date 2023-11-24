import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import logo from './londynek_logo_square_192.png';
import './App.css';

// import NewsItem from './components/NewsItem/NewsItem';
import NewsList from './components/NewsList/NewsList';
/*import FileList from './components/FileList/FileList';*/

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
        <img src={logo} className="App-logo" alt="logo" />
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

      <main>
        <NewsList />
        {/* Możesz dodać więcej komponentów NewsItem tutaj */}
      </main>
      
      <footer>
        FileList
      </footer>
      
    </div>
    
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
