// LIKE COUNTER

var likeClick = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");



likeClick.addEventListener("click", incrementLikeCount);

var count = parseInt(likeCount.textContent);

function incrementLikeCount(event){
  event.preventDefault();

  count = parseInt(likeCount.textContent);
  likeCount.textContent = count + 1;

}
//

//COMMENT

var newComment = document.querySelector("#new-comment");
var commentBody = document.querySelector("#new-comment-body");
var comments = document.querySelector("#comments");

// var button = document.querySelector("button");

newComment.addEventListener("submit", createPost);


function createPost(event) {
  event.preventDefault();

var comment = document.createElement("div");
comment.classList.add("comment");
comment.textContent = commentBody.value;
comments.appendChild (comment);
newComment.reset();
}
//
// var parent = document.querySelector("#comments");
// var form = document.createElement("form");
// var textarea = document.querySelector("textarea").value;
// var p = document.createElement("p");
// valueOfTextArea = textarea.value;
// parent.appendChild(form);
// parent.appendChild(p);
// p.textContent = textarea;
//
//
// newComment.reset();
// }
