// components/AdsList/AdsList.js

import React, { useEffect, useState } from 'react';

const AdsList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    // Tutaj umieść logikę pobrania danych ogłoszeń z pliku JSON
    // Poniżej znajduje się przykładowa ścieżka do pliku JSON

    // W rzeczywistości, użyj fetch lub innej metody do pobrania danych z pliku JSON
    const fetchData = async () => {
      try {
        const response = await fetch('/json_static/ads.json');
        const data = await response.json();
        setAds(data.ads);
      } catch (error) {
        console.error('Fetching ads failed:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Ogłoszenia</h2>
      {ads.map((ad) => (
        <div key={ad.id}>
          <h3>{ad.title}</h3>
          <p>{ad.category}</p>
          <p>{ad.description}</p>
          {ad.image && <img src={ad.image} alt={ad.title} />}
        </div>
      ))}
    </div>
  );
};

export default AdsList;
