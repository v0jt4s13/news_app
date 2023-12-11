/**
 * Główny plik aplikacji React.
 * Odpowiada za renderowanie głównego komponentu (`App`) w elemencie o id 'root' w dokumencie HTML.
 *
 * @file
 * @summary Główny plik aplikacji React.
 */

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import klienta ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Utworzenie korzenia dla ReactDOM i przypisanie do elementu o id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderowanie głównego komponentu App w elemencie root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pomiar wydajności aplikacji i raportowanie wyników
// (Możesz zakomentować lub usunąć, jeśli nie korzystasz z raportowania wydajności)
reportWebVitals();
