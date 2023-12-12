import React, { useState, useEffect } from 'react';
// ... import innych komponentów ...

import './FileList.css';

function FileList() {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // Wczytanie listy plików
    fetch('/json_static/fileList.json')
      .then(response => response.json())
      .then(data => setFileList(data))
      .catch(error => console.error("Fetching file list failed:", error));
  }, []);

  return (
    <div className="FileList">
      {/* ... inne elementy UI ... */}
      <ul>
        {fileList.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;