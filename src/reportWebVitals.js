/**
 * Funkcja reportWebVitals.
 * Funkcja ta obsługuje raportowanie statystyk wydajności aplikacji za pomocą biblioteki web-vitals.
 * Funkcja ta importuje poszczególne metryki wydajności (CLS, FID, FCP, LCP, TTFB) i przekazuje je do
 * funkcji przekazanej jako argument (`onPerfEntry`).
 *
 * @function
 * @param {Function} onPerfEntry - Funkcja obsługująca statystyki wydajności.
 * @returns {void}
 */
const reportWebVitals = onPerfEntry => {
  // Sprawdza, czy przekazano funkcję obsługującą statystyki wydajności
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamicznie importuje metryki wydajności za pomocą web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Wywołuje odpowiednie metody dla każdej metryki
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
