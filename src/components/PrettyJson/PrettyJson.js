import React, { useState, useEffect } from 'react';
import './PrettyJson.css';

function PrettyJson() {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');

  const handleInputChange = (event) => {
    setInputJson(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      // Formatuj JSON i ustaw sformatowane dane
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed, null, 2));
    } catch (error) {
      console.error('Invalid JSON:', error);
      setFormattedJson('Invalid JSON');
    }
  };

  return (
    <div>
      <h2>JSON Formatter</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={inputJson} 
          onChange={handleInputChange}
          placeholder="Wpisz lub wklej JSON tutaj"
        ></textarea>
        <p><button type="submit">Send</button></p>
      </form>
      <pre><code>{formattedJson}</code></pre>
    </div>
  );
}

export default PrettyJson;



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