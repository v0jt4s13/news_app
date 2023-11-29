//import React, { useState, useEffect } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import PrettyJson from './components/PrettyJson/PrettyJson.js';
import ArticlePage from './components/ArticlePage/ArticlePage.js';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Linki do nawigacji */}
        <div className="module-head">from App nav module</div>
        <ul>
          <nav>
            <Link className="cl-li" to="/"><li>Home</li></Link>
            <Link className="cl-li" to="/json-formatter"><li>PrettyJson</li></Link>
          </nav>
        </ul>

        {/* Definicja tras */}
        <Routes>
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/PrettyJson" element={<PrettyJson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

