import React from 'react';
import './Documentation.css';

function Documentation() {
  return (
    <div>
      <header>
        <h1>Moja Dokumentacja</h1> 
      </header>
      <nav>
        <ul>
          <li><a href="#git">Git</a></li>
          <li><a href="#react-hooks">React Hooks</a></li>
        </ul>
      </nav>
      <main>
        <section id="git">
          <h2>Git</h2>
          <p>Lista przydatnych komend Git:</p>
          <ol>
            <li><code>git init</code> - Inicjowanie nowego repozytorium Git w bieżącym katalogu.</li>
            <li><code>git clone &lt;url&gt;</code> - Klonowanie istniejącego repozytorium z podanego URL.</li>
            <li><code>git add &lt;file&gt;</code> - Dodawanie zmian do indeksu przed zatwierdzeniem (commit).</li>
            <li><code>git commit -m "message"</code> - Zatwierdzanie zmian w repozytorium z wiadomością opisującą zmiany.</li>
            <li><code>git status</code> - Wyświetlanie informacji o bieżącym stanie repozytorium.</li>
            <li><code>git branch</code> - Wyświetlanie listy branchy i zaznaczenie obecnie używanego brancha.</li>
            <li><code>git merge &lt;branch&gt;</code> - Łączenie zmian z innego brancha do obecnie używanego.</li>
            <li><code>git pull</code> - Pobieranie i łączenie zmian z repozytorium zdalnego do lokalnego.</li>
            <li><code>git push</code> - Wysyłanie zmian do repozytorium zdalnego.</li>
            <li><code>git log</code> - Wyświetlanie historii commitów.</li>
          </ol>
        </section>
        <section id="react-hooks">
          <h2>React Hooks</h2>
          <p>Lista przydatnych React Hooks:</p>
          <ol>
            <li><code>useState</code> - Pozwala na używanie stanu w komponencie funkcyjnym.</li>
            <li><code>useEffect</code> - Umożliwia wykonywanie efektów ubocznych w komponencie funkcyjnym.</li>
            <li><code>useReducer</code> - Pozwala na zarządzanie stanem komponentu za pomocą reducer-a.</li>
            <li><code>useContext</code> - Umożliwia korzystanie z wartości kontekstu dostarczanego przez &lt;Context.Provider&gt;.</li>
            <li><code>useMemo</code> - Memoizuje wartości, co pozwala na unikanie niepotrzebnych obliczeń przy renderowaniu komponentu.</li>
            <li><code>useCallback</code> - Memoizuje funkcje, co jest przydatne, gdy funkcja jest przekazywana do komponentów potomnych.</li>
            <li><code>useRef</code> - Umożliwia uzyskanie dostępu do refa, który nie powoduje ponownego renderowania komponentu.</li>
          </ol>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Moja Dokumentacja</p>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}

export default Documentation;
