import React from 'react';

function ArticleInfo({ release_date, comments_count }) {
  return <div class="article-info">
		<time datetime="{release_date}" title="{release_date}">{release_date}</time>
		<span class="comments-info" title="Ilość komentarzy: 0" data-style="display:none"><i class="material-icons"></i>
		<span id="article-top-comments-count">0</span></span>
	</div>;
}

export default ArticleInfo;