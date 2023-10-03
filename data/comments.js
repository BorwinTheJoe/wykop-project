const commentList = [{
  commentId: 1, // Unique Id of the comment.
  authorId: 1, // Id of the user who made the comment.
  articleId: 1, // Id of the Article this comment is made at
  commentedId: null, // Id of the Comment this comment has been made towards. Only one of both can be !null at a time.
  commentCount: 8, // Count of comments made to this comment. Is null if it's already a comment to another comment.
  rating: 17, // Rating of the comment.
  date: "02.02.2023", // Date of the comment being made
  content: "This is text or a Link" //HTML content of a comment?
},
{
  commentId: 2, // Unique Id of the comment.
  authorId: 1, // Id of the user who made the comment.
  articleId: 2, // Id of the Article this comment is made at
  commentedId: null, // Id of the Comment this comment has been made towards. Only one of both can be !null at a time.
  commentCount: 1, // Count of comments made to this comment. Is null if it's already a comment to another comment.
  rating: -3, // Rating of the comment.
  date: "24.12.2022", // Date of the comment being made
  content: "This one's DEFINITELY a link" //HTML content of a comment?
},
{
  commentId: 3, // Unique Id of the comment.
  authorId: 2, // Id of the user who made the comment.
  articleId: null, // Id of the Article this comment is made at
  commentedId: 2, // Id of the Comment this comment has been made towards. Only one of both can be !null at a time.
  commentCount: 0, // Count of comments made to this comment. Is null if it's already a comment to another comment.
  rating: 2, // Rating of the comment.
  date: "25.12.2022", // Date of the comment being made
  content: "Hey! That's Inappropriate!" //HTML content of a comment?
}];