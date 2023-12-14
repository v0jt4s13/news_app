import React from 'react';

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function ArticleBody({ body }) {
  return <div class="article-content ckeditor cke-article" dangerouslySetInnerHTML={{ __html: decodeHtml(body) }}></div>;
}

export default ArticleBody;