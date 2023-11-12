import {articleList} from '../data/articles.js';


let articlesHTML = '';

articleList.forEach((article) => {
  articlesHTML += `<div class="article">
  <div class="article-rating">
    <div class="comment-count">${article.rating.count}</div>
  </div>

  <div class="article-text">
    <div class="article-title">${article.title}</div>

    <div class="article-abstract">${article.abstract}</div>

    <div class="article-source">${article.authorId} z google.com | opublikowany: ${article.date}</div>

    <div class="article-tags">${article.commentCount} • ${article.tags}</div>
  </div>

  <div class="article-image-container">
    <img class="article-image" src="">
  </div>
</div>`;
});

// Modify articles.js to make tags into an array list rather than a string?
// Would allow using # symbol before each tag.

document.querySelector('.container').innerHTML = articlesHTML;
