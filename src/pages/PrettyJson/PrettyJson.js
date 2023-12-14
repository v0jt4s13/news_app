import React, { useState } from 'react';
import './PrettyJson.css';

/**
 * Komponent PrettyJson.
 * Komponent do formatowania i wyświetlania JSON. Pozwala użytkownikowi wybrać plik JSON
 * lub wprowadzić JSON ręcznie, a następnie prezentuje sformatowany wynik.
 *
 * @component
 * @summary Komponent do formatowania i wyświetlania JSON.
 */
function PrettyJson() {
  // Stan dla przechowywania wprowadzonego JSON, sformatowanego JSON i nazwy wybranego pliku
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  // Lista dostępnych plików JSON
  const jsonFiles = ['menu.json', 'articles.json', 'forms-fields.json'];

  // Obsługa zmiany wprowadzonego JSON
  const handleInputChange = (event) => {
    setInputJson(event.target.value);
  };

  // Obsługa zmiany wybranego pliku JSON
  const handleFileChange = async (event) => {
    const filename = event.target.value;
    setSelectedFile(filename);
    if (filename) {
      try {
        // Ładowanie danych z wybranego pliku JSON
        const response = await fetch(`/json_static/${filename}`);
        const data = await response.json();
        setInputJson(JSON.stringify(data));
        setFormattedJson(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error loading JSON file:', error);
        setInputJson('');
        setFormattedJson('Invalid JSON or Error Loading File');
      }
    }
  };

  // Obsługa przesłania formularza do sformatowania wprowadzonego JSON
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed, null, 2));
    } catch (error) {
      console.error('Invalid JSON:', error);
      setFormattedJson('Invalid JSON');
    }
  };

  // Renderowanie komponentu PrettyJson
  return (
    <div>
      <h2>JSON Formatter</h2>
      <form onSubmit={handleSubmit}>
        {/* Wybór pliku JSON z listy dostępnych plików */}
        <label>
          Choose JSON File:
          <select value={selectedFile} onChange={handleFileChange}>
            <option value="">Select a file</option>
            {jsonFiles.map((file, index) => (
              <option key={index} value={file}>{file}</option>
            ))}
          </select>
        </label>
        <p>
          {/* Wprowadzanie lub wklejanie JSON do pola tekstowego */}
          <textarea 
            value={inputJson} 
            onChange={handleInputChange}
            placeholder="Wpisz lub wklej JSON tutaj"
          ></textarea>
        </p>
        {/* Przycisk do przesłania formularza */}
        <p><button type="submit">Send</button></p>
      </form>
      {/* Wyświetlanie sformatowanego JSON */}
      <pre><code>{formattedJson}</code></pre>
    </div>
  );
}

export default PrettyJson;
