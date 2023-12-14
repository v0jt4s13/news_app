import React from 'react';

function ArticleImage({ src, alt }) {

	return (
    <div>
      {src ? (
        <>
					<figure className="article-image-top">
						<img src={`${src}`} alt={alt} />
						<figcaption>{alt}</figcaption>
					</figure>
        </>
      ) : (
        <p>Ładowanie obrazu...</p>
      )}
    </div>
  );
}

export default ArticleImage;