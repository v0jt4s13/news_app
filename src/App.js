/**
 * Komponent główny aplikacji React.
 * Komponent ten jest odpowiedzialny za renderowanie struktury aplikacji w oparciu o React Router.
 * Zawiera nawigację oraz definiuje trasy dla poszczególnych komponentów.
 *
 * @component
 * @return {JSX.Element} Element JSX reprezentujący strukturę aplikacji.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import PrettyJson from './components/PrettyJson/PrettyJson.js';
import ArticlePage from './components/ArticlePage/ArticlePage.js';
import FormPage from './components/FormPage/FormPage.js'; // Dodano import FormPage
import './App.css';

/**
 * Główny komponent aplikacji.
 *
 * @function
 * @return {JSX.Element} Element JSX reprezentujący główny komponent aplikacji.
 */
function App() {
  return (
    <Router>
      <div>
        {/* Linki do nawigacji */}
        <div className="module-info">===&gt;from App&lt;===</div>
        <ul>
          <nav>
            {/* Link do strony głównej */}
            <Link className="cl-li" to="/"><li>Home</li></Link>
            {/* Link do narzędzia do formatowania JSON */}
            <Link className="cl-li" to="/json-formatter"><li>PrettyJson</li></Link>
            {/* Link do strony z ogłoszeniami */}
            <Link className="cl-li" to="/form"><li>Ogłoszenia</li></Link> {/* Dodano link do Ogłoszeń */}
          </nav>
        </ul>

        {/* Definicja tras */}
        <Routes>
          {/* Trasa do wyświetlania pojedynczego artykułu */}
          <Route path="/article/:id" element={<ArticlePage />} />
          {/* Trasa do strony z ogłoszeniami */}
          <Route path="/form" element={<FormPage />} /> {/* Dodano trasę do Ogłoszeń */}
          {/* Domyślna trasa prowadząca do strony głównej */}
          <Route path="/" element={<HomePage />} />
          {/* Trasa do narzędzia do formatowania JSON */}
          <Route path="/json-formatter" element={<PrettyJson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
