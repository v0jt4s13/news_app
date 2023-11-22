import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import NewsList from './components/NewsList/NewsList';

function FileTree({ data, path }) {
  if (data.isFile) {
    return <li>{path}</li>;
  } else {
    return (
      <li>
        {path}
        <ul>
          {data.children.map((child, index) => (
            <FileTree
              key={index}
              data={child}
              path={`${path}/${child.name}`}
            />
          ))}
        </ul>
      </li>
    );
  }
}

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    fetch('/json_static/menu.json')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error("Fetching menu failed:", error));
  }, []);

  useEffect(() => {
    fetch('/fileList.json')
      .then(response => response.json())
      .then(data => setFileList(data))
      .catch(error => console.error("Fetching file list failed:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {menuItems.map((item, index) => (
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
        <ul>
  <FileTree data={{ children: fileList }} path=".." />
  </ul>


      </main>
    </div>
  );
}

export default App;
