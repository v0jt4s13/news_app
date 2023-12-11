/**
 * Komponent PrettyJson.
 * Komponent do formatowania i wyświetlania JSON. Pozwala użytkownikowi wybrać plik JSON
 * lub wprowadzić JSON ręcznie, a następnie prezentuje sformatowany wynik.
 *
 * @component
 * @summary Komponent do formatowania i wyświetlania JSON.
 */

import React, { useState } from 'react';
import './PrettyJson.css';

/**
 * Funkcja PrettyJson.
 * Funkcja reprezentująca komponent PrettyJson.
 *
 * @function
 * @return {JSX.Element} Element JSX reprezentujący PrettyJson.
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




// import React, { useState } from 'react';
// import './PrettyJson.css';

// function PrettyJson() {
//   const [inputJson, setInputJson] = useState('');
//   const [formattedJson, setFormattedJson] = useState('');

//   const handleInputChange = (event) => {
//     setInputJson(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     try {
//       // Formatuj JSON i ustaw sformatowane dane
//       const parsed = JSON.parse(inputJson);
//       setFormattedJson(JSON.stringify(parsed, null, 2));
//     } catch (error) {
//       console.error('Invalid JSON:', error);
//       setFormattedJson('Invalid JSON');
//     }
//   };

//   return (
//     <div>
//       <h2>JSON Formatter</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea 
//           value={inputJson} 
//           onChange={handleInputChange}
//           placeholder="Wpisz lub wklej JSON tutaj"
//         ></textarea>
//         <p><button type="submit">Send</button></p>
//       </form>
//       <pre><code>{formattedJson}</code></pre>
//     </div>
//   );
// }

// export default PrettyJson;



// function PrettyJson() {
//   const [jsonString, setJsonString] = useState('');

	
// 	useEffect(() => {
//     const data = [
//       {"ID": 50, "Field": "translation_p", "Type": [2, "chaeckbox"], "Title": "acs-subsite.Order_translation", "Req": "f", "Width": "0", "ID conn": "0", "Hidden": "f", "Max char": 0, "DataType": "char", "ExistIn": {"jobseekers": true, "business": true, "personals": true, "automotive": true, "jobs": true, "buysell": true, "accommodation": true}, "Sort": 50, "Lang": " ", "Group": 0, "GroupSort": 0}, {"ID": 48, "Field": "english_p", "Type": [2, "chaeckbox"], "Title": "acs-subsite.Other_version", "Req": "f", "Width": "0", "ID conn": "0", "Hidden": "f", "Max char": 0, "DataType": "char", "ExistIn": {"jobseekers": true, "business": true, "personals": true, "automotive": true, "jobs": true, "buysell": true, "accommodation": true}, "Sort": 50, "Lang": " ", "Group": 0, "GroupSort": 0}
//     ];
//     // setJsonString(JSON.stringify(data, null, 2));
//     setJsonString(JSON.stringify(data, null, 9));
//   }, []);


//   return (
//     <div>
//       <h2>JSON data to JSON Pretty</h2>
// 			{str}
// 			<textarea id="json-container-textarea" value={jsonString}></textarea>
// 			<pre><code id="json-container">{jsonString}</code></pre>
			
// 		</div>
//   );
// }

// export default PrettyJson;