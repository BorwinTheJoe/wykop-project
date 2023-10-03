const userList = [{
  userId: 1,  //Unique id of the user
  nickname: "Jakub278", // user's Nickname
  account: "AccountLink", // Link to the Account of the Author
  posts: [{
      articleId: 1, // id of the Article they are author of.
      commentId: null // id of the comment they are author of. if one's null, the other's a number and vice-versa
    },
    {
      articleId: null,
      commentId: 1
    },
    {
      articleId: null,
      commentId: 2
    }]
},
{
  userId: 2,  //Unique id of the user
  nickname: "PaulinaSZTORC", // user's Nickname
  account: "AccountLink2", // Link to the Account of the Author
  posts: [{
      articleId: 2, // id of the Article they are author of.
      commentId: null // id of the comment they are author of. if one's null, the other's a number and vice-versa
    },
    {
      articleId: null,
      commentId: 3
    }]
}];