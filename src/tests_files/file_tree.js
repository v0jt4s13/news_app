const fs = require('fs');
const path = require('path');

const file_list = '../../public/json_static/fileList.json';
const dirname = '../../';
const directoryPath = path.join(dirname, 'src'); // Zmodyfikuj ścieżkę w zależności od struktury projektu
const directoryPath2 = path.join(dirname, 'public');
console.log('directoryPath:',directoryPath);

const listFiles = (dir, fileList = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    fileList.push(filePath);
    if (fs.statSync(filePath).isDirectory()) {
      listFiles(filePath, fileList);
    }
  });
  return fileList;
};

let files_list = listFiles(directoryPath2, listFiles(directoryPath));

fs.writeFileSync(file_list, JSON.stringify(files_list, null, 2));