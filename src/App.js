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

function App() {
  return (
    <Router>
      <div>
        {/* Linki do nawigacji */}
        from App nav module<br></br>
        <nav>
          <ul className="cl-ul">
            <Link to="/"><li className="cl-li">Home</li></Link>
            <Link to="/PrettyJson"><li className="cl-li">PrettyJson</li></Link>
          </ul>
        </nav>

        {/* Definicja tras */}
        <Routes>
          <Route path="/wiadomosci/:id" element={<ArticlePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/PrettyJson" element={<PrettyJson />} />
        </Routes>
      </div>
    </Router>
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
