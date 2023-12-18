import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Funkcja pomocnicza do dekodowania HTML entities.
/**
 * Funkcja pomocnicza do dekodowania HTML entities.
 * @param {string} html - Kod HTML do zdekodowania.
 * @returns {string} - Zdekodowany tekst.
 */
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Import komponentów związanych z artykułem
import ArticleTitle from '../../components/ArticleTitle';
import ArticleImage from '../../components/ArticleImage';
import ArticleHeadline from '../../components/ArticleHeadline';
import ArticleBody from '../../components/ArticleBody';
import ArticleInfo from '../../components/ArticleInfo';

/**
 * Komponent reprezentujący stronę z pojedynczym artykułem.
 * @component
 * @returns {JSX.Element} - Element JSX reprezentujący stronę z artykułem.
 */
function ArticlePage() {
  // Pobranie ID artykułu z parametrów URL
  let { id } = useParams();
  // Stan przechowujący dane o artykule
  const [article, setArticle] = useState(null);

  // Efekt pobierający dane o artykule z API przy zmianie ID
  useEffect(() => {
    // Budowanie URL zależnie od ID artykułu
    const articleUrl = `https://londynek.net/v1/news/${id}`;
    
    // Pobieranie danych z API
    fetch(articleUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Zakładam, że odpowiedź z API zawiera pojedynczy artykuł
        setArticle(data.data[0]); // Ustawianie pierwszego elementu z odpowiedzi jako artykuł
      })
      .catch(error => {
        console.error('Błąd podczas pobierania artykułu:', error);
      });
  }, [id]); // Zależność od ID, aby ponownie pobrać dane przy zmianie ID

  // Renderowanie komponentu
  return (
    <div>
      {article ? (
        <>
          {/* Struktura artykułu */}
          <div className="jd-content">
            <div className="jd-content-3-2">
              <section className="jd-article" data-style="margin-right: 8px;">
                <article>
                  {/* Komponenty związane z treścią artykułu */}
                  <ArticleTitle title={article.title} />
                  <ArticleInfo release_date={article.release_date} comments_count={article.comments_count} />
                  <ArticleImage url={article.images[0].url} alt={article.images[0].alt} />
                  <ArticleHeadline headline={article.headline} />
                  <ArticleBody body={article.news_content} />

                  {/* Informacje dotyczące tagów */}
                  <div className="article-tags">
                    <i className="material-icons"></i>
                    <ul>
                      <li className=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=34">Tagi do skończenia</a></h2></li>
                      <li className=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=239">Gospodarka</a></h2></li>
                      <li className=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=362">Społeczeństwo</a></h2></li>
                    </ul>
                  </div>

                  {/* Autor artykułu */}
                  <div className="article-author">PA Media / Jagoda S.</div>

                  {/* Przyciski do udostępniania na mediach społecznościowych */}
                  <div className="article-bottom social-links">
                    {/* Przyciski mediów społecznościowych */}
                    {/* ... (Pozostałe przyciski) ... */}
                  </div>

                  {/* Dodatkowe linki do innych artykułów */}
                  <p><strong>Czytaj więcej: DOKOŃCZYĆ ...</strong></p>
                  <p><a href="/wiadomosci/Z+powodu+spadku+standardów+życia+brytyjscy+pracownicy+tracą+ponad+10+tys.+GBP+rocznie+wiadomosci+news,/wiadomosci/article?link_wew=1&amp;jdnews_id=98484">Z powodu spadku standardów życia brytyjscy pracownicy tracą ponad 10 tys. GBP rocznie</a></p>
                  {/* ... (Pozostałe linki) ... */}
                </article>
                {/* Skrypt do obsługi komentarzy na stronie */}
                <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                {/* Sekcja komentarzy */}
                <div className="article-comments">
                  <a id="article-comments"></a>
                  {/* Nagłówek komentarzy */}
                  <div className="jd-h4"><span data-style="font-size: 1.6rem;line-height: 2.3rem;position: static !important;margin-bottom: 2px;font-weight: 400;">Komentarze</span><hr /></div>
                  <div>Nikt jeszcze nie skomentował tego tematu.<div className="bubble">Bądź pierwszy! Podziel się opinią.</div></div>
                </div>

                {/* Sekcja dodawania komentarza */}
                <div className="jd-h4">
                  <span data-style="font-size: 1.6rem;line-height: 2.3rem;position: static !important;margin-bottom: 2px;font-weight: 400;">Dodaj komentarz</span>
                  <hr className="main"></hr>
                </div>
                {/* Przyciski do wyboru formy dodawania komentarza */}
                <div className="toggle-comment-form">
                  {/* Przycisk do dodawania komentarza przez konto Facebook */}
                  <span className="toggle-button"><a id="btn-facebook" className="btn-facebook">Skomentuj wiadomość<br />przez konto Facebook</a></span>
                  {/* Separator "lub" */}
                  <span className="or" data-text="lub"></span>
                  {/* Przycisk do dodawania komentarza bezpośrednio na londynku */}
                  <span className="toggle-button"><a id="btn-londynek" className="btn-londynek">Skomentuj wiadomość<br />bezpośrednio na londynku</a></span>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : (
        // Komunikat ładowania artykułu
        <p>Ładowanie artykułu...</p>
      )}
    </div>
  );
}

export default ArticlePage;
