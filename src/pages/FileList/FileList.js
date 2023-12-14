import React, { useState, useEffect } from 'react';
// ... import innych komponentów ...

import './FileList.css';

/**
 * Komponent reprezentujący listę plików.
 * @component
 * @returns {JSX.Element} - Element JSX reprezentujący listę plików.
 */
function FileList() {
  // Stan przechowujący listę plików
  const [fileList, setFileList] = useState([]);

  // Efekt pobierający listę plików z pliku JSON
  useEffect(() => {
    fetch('/json_static/fileList.json')
      .then(response => response.json())
      .then(data => setFileList(data))
      .catch(error => console.error("Fetching file list failed:", error));
  }, []);

  // Renderowanie komponentu
  return (
    <div className="FileList">
      {/* ... inne elementy UI ... */}
      <ul>
        {fileList.map((file, index) => (
          // Renderowanie elementu listy dla każdego pliku
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
