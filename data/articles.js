const articleList = [{
  articleId : 1, // Unique article id
  title: "artykuł 1", // Article Title - Can be copied from original site, can be set manually.
  image: "images/article-1.jpg", // Link to image/video on the original site. Maybe copy over the HTML container?
  abstract: "To jest tekst który pojawia się jako skrót pierwszego artykułu", // Either own text or an excerpt from the original site.
  link: "", // Link to the original site.
  rating : {
    count: 1793, // Numer of Ratings
    hot: true // check to mark if the article is 'hot'.
  },
  tags: "first, article, copy, original", // Article tags
  authorId: 1,  // Id of the Author of the post
  date: "01.02.2023", // date of the article being made
  commentCount: 103 //Count of the comments made under the article
},
{
  articleId : 2, // Unique article id
  title: "Dziewica Maryja urodziła syna", // Article Title - Can be copied from original site, can be set manually.
  image: "images/article-2.jpg", // Link to image/video on the original site. Maybe copy over the HTML container?
  abstract: "Kto by myślał że 'Dziewica' mogłaby urodzić?! Skandal, czy może Boski wpływ?", // Either own text or an excerpt from the original site.
  link: "", // Link to the original site.
  rating : {
    count: 23, // Numer of Ratings
    hot: false // check to mark if the article is 'hot'.
  },
  tags: "christmas, church, christianity, holyTrinity, religion", // Article tags
  authorId: 2,  // Id of the Author of the post
  date: "23.12.2022", // date of the article being made
  commentCount: 2 //Count of the comments made under the article
},
{
  articleId : 3, // Unique article id
  title: "Chłopak znalazł idealny patyk", // Article Title - Can be copied from original site, can be set manually.
  image: "images/article-3.jpg", // Link to image/video on the original site. Maybe copy over the HTML container?
  abstract: "Ten Patyk zmieni świat!", // Either own text or an excerpt from the original site.
  link: "", // Link to the original site.
  rating : {
    count: 998792, // Numer of Ratings
    hot: true // check to mark if the article is 'hot'.
  },
  tags: "patyk, chłopak, facet, przyroda, świat", // Article tags
  authorId: 1,  // Id of the Author of the post
  date: "02.03.2077", // date of the article being made
  commentCount: 78433 //Count of the comments made under the article
}];