// MAKE A FETCH REQUEST TO /POSTS AND GET ALL THE POSTS TO SHOW IN THE PAGE
const endPoint = "http://localhost:3000/posts";

function makePost(post) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");

  img.src = post.url;
  p.textContent = post.comment;
  div.append(img, p);

  // document.getElementsByClassName("posts")[0];
  const postsSection = document.querySelector(".posts");
  postsSection.append(div);
}

fetch(endPoint)
.then((response) => response.json())
.then((catParties) => {
  // catParty is an Array of objects
  catParties.forEach(makePost);
});

fetch(`${endPoint}/2`)
.then((res) => res.json())
.then((post) => {
  makePost(post);
});

function myFetch(url, options = {}) {
  return fetch(url, options)
  .then(res => res.json())
}


// CODE FROM YESTERDAY
const form = document.querySelector("form");
const gifUrlInput = document.getElementById("gif-url");
const commentInput = document.getElementById("comment");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = gifUrlInput.value;
  const comment = commentInput.value;

  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");

  img.src = url;
  p.textContent = comment;
  div.append(img, p);

  // document.getElementsByClassName("posts")[0];
  const postsSection = document.querySelector(".posts");
  postsSection.append(div);
});

/* 
<div>
  <img src="https://media0.giphy.com/media/KcW2FVEJnzKeiZkVI1/giphy.gif">
  <p>This cat is so sad. Somebody hug him now!!</p>
</div> 
*/