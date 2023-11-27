import React from 'react';
import { useParams } from 'react-router-dom';

function ArticlePage() {
  let { id } = useParams();

  // Tutaj możesz pobrać dane artykułu używając ID
  // Na przykład: fetch(`api/articles/${id}`).then(...)

  return (
    <div>
      <h2>Artykuł {id}</h2>
      {/* Renderowanie treści artykułu */}
    </div>
  );
}

export default ArticlePage;