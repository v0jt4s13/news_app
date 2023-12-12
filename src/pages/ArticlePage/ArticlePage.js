import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleTitle from '../../components/ArticleTitle';
import ArticleImage from '../../components/ArticleImage';
import ArticleHeadline from '../../components/ArticleHeadline';
import ArticleBody from '../../components/ArticleBody';
import ArticleInfo from '../../components/ArticleInfo';

function ArticlePage() {
  let { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Budowanie URL zależnie od ID artykułu
    const articleUrl = `https://londynek.net/v1/news/${id}`;
    // const articleUrl = `http://localhost/v1/news/${id}`;

    // Pobieranie danych z API
    fetch(articleUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Zakładam, że odpowiedź z API zawiera pojedynczy artykuł
        setArticle(data.data[0]); // Ustawianie pierwszego elementu z odpowiedzi jako artykuł
      })
      .catch(error => {
        console.error('Błąd podczas pobierania artykułu:', error);
      });
  }, [id]); // Zależność od ID, aby ponownie pobrać dane przy zmianie ID

 return (
    <div>
      {article ? (
        <>
          <div class="jd-content">
            <div class="jd-content-3-2">
              <section class="jd-article" data-style="margin-right: 8px;">
                <article>
                  <ArticleTitle title={article.title} />
                 
                  <ArticleInfo release_date={article.release_date} comments_count={article.comments_count} />
                  
                  <div class="article-tags">
                    <i class="material-icons"></i>
                    <ul>
                      <li class=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=34">Tagi do skończenia</a></h2></li>
                      <li class=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=239">Gospodarka</a></h2></li>
                      <li class=""><h2 data-style="font-weight: unset;"><a href="/wiadomosci/cat?cat_id=40&amp;tag_id=362">Społeczeństwo</a></h2></li>
                    </ul>
                  </div>

                  <ArticleImage url={article.images[0].url} alt={article.images[0].alt} />
                  <figure class="article-image-top">
                    <img src={`${article.images[0].url}`} alt={article.images[0].alt} />
                    <figcaption>{article.images[0].alt}</figcaption>
                  </figure>
                  
                  <ArticleHeadline headline={article.headline} />
                  <ArticleBody body={article.news_content} />
                  
                  <div class="article-author">PA Media / Jagoda S.</div>
                  <div class="article-bottom social-links">
                    <div class="article-bottom-item to-right">
                      <div class="fb-like fb_iframe_widget" data-href="https://londynek.net/wiadomosci/article?jdnews_id=98531" data-width="" data-layout="button" data-action="like" data-size="large" data-share="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&amp;app_id=377037392407080&amp;container_width=0&amp;href=https%3A%2F%2Flondynek.net%2Fwiadomosci%2Farticle%3Fjdnews_id%3D98531&amp;layout=button&amp;locale=pl_PL&amp;sdk=joey&amp;share=false&amp;size=large&amp;width="><span data-style="vertical-align: top; width: 0px; height: 0px; overflow: hidden;"><iframe name="f81bad03bef0b4" width="1000px" height="1000px" data-testid="fb:like Facebook Social Plugin" title="fb:like Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v13.0/plugins/like.php?action=like&amp;app_id=377037392407080&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1b8be016831e54%26domain%3Dlondynek.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Flondynek.net%252Ff37d9030141ca18%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Flondynek.net%2Fwiadomosci%2Farticle%3Fjdnews_id%3D98531&amp;layout=button&amp;locale=pl_PL&amp;sdk=joey&amp;share=false&amp;size=large&amp;width=" data-style="border: none; visibility: visible; width: 0px; height: 0px;"></iframe></span></div>
                      <div class="wykop-link"><a href="/redirect-social?s=7&amp;id=98531&amp;pid=2191248&amp;t=Jedna+czwarta+pracownikow+w+UK+rozwa%c5%bca+za%c5%82o%c5%bcenie+w%c5%82asnej+dzia%c5%82alno%c5%9bci+gospodarczej" alt="Wykop" target="_blank" rel="nofollow"><div class="wykop-image" title="Wyślij na wykop.pl"></div></a></div>
                      <a class="social-link social-link-fb" href="/redirect-social?s=1&amp;id=98531&amp;pid=2191248&amp;t=Jedna+czwarta+pracownikow+w+UK+rozwa%c5%bca+za%c5%82o%c5%bcenie+w%c5%82asnej+dzia%c5%82alno%c5%9bci+gospodarczej" target="_blank" title="Podziel się na Facebooku" rel="nofollow"><span class="mdi mdi-facebook"></span></a>
                      <a class="social-link social-link-reddit" href="/redirect-social?s=2&amp;id=98531&amp;pid=2191248&amp;t=Jedna+czwarta+pracownikow+w+UK+rozwa%c5%bca+za%c5%82o%c5%bcenie+w%c5%82asnej+dzia%c5%82alno%c5%9bci+gospodarczej" target="_blank" title="Podziel się na Reddit" rel="nofollow"><span class="mdi mdi-reddit"></span></a>
                      <a class="social-link social-link-tw" href="/redirect-social?s=3&amp;id=98531&amp;pid=2191248&amp;t=Jedna+czwarta+pracownikow+w+UK+rozwa%c5%bca+za%c5%82o%c5%bcenie+w%c5%82asnej+dzia%c5%82alno%c5%9bci+gospodarczej" target="_blank" title="Podziel się na Twitterze" rel="nofollow"><span class="mdi mdi-twitter"></span></a>
                      <a class="social-link social-link-mail" href="mailto:?subject=Jedna czwarta pracownikow w UK rozwa%c5%bca za%c5%82o%c5%bcenie w%c5%82asnej dzia%c5%82alno%c5%9bci gospodarczej&amp;body=Jedna czwarta pracownikow w UK rozwa%c5%bca za%c5%82o%c5%bcenie w%c5%82asnej dzia%c5%82alno%c5%9bci gospodarczej https://londynek.net/wiadomosci/article?jdnews_id=98531" title="Wyślij przez email" rel="nofollow"><span class="mdi mdi-email"></span></a>
                      <a class="social-link social-link-in" href="/redirect-social?s=6&amp;id=98531&amp;pid=2191248&amp;t=Jedna+czwarta+pracownikow+w+UK+rozwa%c5%bca+za%c5%82o%c5%bcenie+w%c5%82asnej+dzia%c5%82alno%c5%9bci+gospodarczej" target="_blank" title="Dodaj artykuł na LinkedIn" rel="nofollow"><span class="mdi mdi-linkedin"></span></a>
                    </div>
                  </div>
                  <p><strong>Czytaj więcej: DOKOŃCZYĆ ...</strong></p>
                  <p><a href="/wiadomosci/Z+powodu+spadku+standardów+życia+brytyjscy+pracownicy+tracą+ponad+10+tys.+GBP+rocznie+wiadomosci+news,/wiadomosci/article?link_wew=1&amp;jdnews_id=98484">Z powodu spadku standardów życia brytyjscy pracownicy tracą ponad 10 tys. GBP rocznie</a></p><p><a href="/wiadomosci/Portal+rekrutacyjny+Reed+Wzrost+płacy+minimalnej+w+UK+doprowadzi+do+fali+zwolnień+wiadomosci+news,/wiadomosci/article?link_wew=1&amp;jdnews_id=98496">Portal rekrutacyjny Reed: Wzrost płacy minimalnej w UK doprowadzi do fali zwolnień</a></p><p><a href="/wiadomosci/Minister+imigracji+zapewnia+że+brytyjscy+pracownicy+wypełnią+luki+po+imigrantach+wiadomosci+news,/wiadomosci/article?link_wew=1&amp;jdnews_id=98507">Minister imigracji zapewnia, że brytyjscy pracownicy "wypełnią luki" po imigrantach</a></p>
                </article>
                <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                <div class="article-comments">
                  <a id="article-comments"></a>
                  <div class="jd-h4"><span data-style="font-size: 1.6rem;line-height: 2.3rem;position: static !important;margin-bottom: 2px;font-weight: 400;">Komentarze</span><hr /></div>
                  <div>Nikt jeszcze nie skomentował tego tematu.<div class="bubble">Bądź pierwszy! Podziel się opinią.</div></div>
                </div>
                <div class="jd-h4">
                  <span data-style="font-size: 1.6rem;line-height: 2.3rem;position: static !important;margin-bottom: 2px;font-weight: 400;">Dodaj komentarz</span>
                  <hr class="main"></hr>
                </div>
                <div class="toggle-comment-form">
                    <span class="toggle-button"><a id="btn-facebook" class="btn-facebook">Skomentuj wiadomość<br />przez konto Facebook</a></span>
                    <span class="or" data-text="lub"></span>
                    <span class="toggle-button"><a id="btn-londynek" class="btn-londynek">Skomentuj wiadomość<br />bezpośrednio na londynku</a></span>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : (
        <p>Ładowanie artykułu...</p>
      )}
    </div>
  );
}

export default ArticlePage;