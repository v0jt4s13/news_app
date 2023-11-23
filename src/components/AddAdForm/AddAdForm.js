// components/AddAdForm/AddAdForm.js

import React, { useState } from 'react';

const AddAdForm = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tutaj dodaj logikę zapisu danych do pliku JSON
    // Możesz użyć fetch lub innej metody do wysłania danych na serwer

    const adData = {
      category,
      title,
      description,
      image: image ? URL.createObjectURL(image) : null, // Konwertuj obraz na URL
    };

    // Tutaj umieść logikę wysłania danych na serwer lub zapisu do pliku JSON
    console.log('Dane ogłoszenia:', adData);

    // Czyść pola formularza po zapisaniu danych
    setCategory('');
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div>
      <h2>Dodaj ogłoszenie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Kategoria:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Wybierz kategorię</option>
            <option value="Praca">Praca</option>
            <option value="Nieruchomości">Nieruchomości</option>
            <option value="Usługi">Usługi</option>
            {/* Dodaj więcej kategorii według potrzeb */}
          </select>
        </label>

        <label>
          Tytuł:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Opis:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
          Zdjęcie:
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </label>

        <button type="submit">Dodaj ogłoszenie</button>
      </form>
    </div>
  );
};

export default AddAdForm;
