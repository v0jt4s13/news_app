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
// import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Linki do nawigacji */}
        <div className="module-info">===&gt;from App&lt;===</div>
        <ul>
          <nav>
            <Link className="cl-li" to="/"><li>Home</li></Link>
            <Link className="cl-li" to="/json-formatter"><li>PrettyJson</li></Link>
            <Link className="cl-li" to="/form"><li>Ogłoszenia</li></Link> {/* Dodano link do Ogłoszeń */}
          </nav>
        </ul>

        {/* Definicja tras */}
        <Routes>
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/form" element={<FormPage />} /> {/* Dodano trasę do Ogłoszeń */}
          <Route path="/" element={<HomePage />} />
          <Route path="/json-formatter" element={<PrettyJson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;