/*****************STRUCTURE OF A POST*********************
 * <div>
 *  <img src="https://media0.giphy.com/media/KcW2FVEJnzKeiZkVI1/giphy.gif">
 *  <p>This cat is so sad. Somebody hug him now!!</p>
 * </div>
 * *******************************************************/

const ENDPOINT = "http://localhost:3000/posts";

const postsSection = document.querySelector(".posts");
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  postPost(e.target);
  form.reset();
});

function postPost(target) {
  const gifURL = document.querySelector("#gif-url").value;
  const comment = document.querySelector("#comment").value;

  fetch(ENDPOINT, {
    method: "POST",
    headers: {
      // MIME type, what type of data are we sending in the body of the request
      "Content-Type": "application/json"
    },
    // body: JSON.stringify({ url: target.url.value, comment: target.comment.value })
    // MUST SEND A STRING!!
    body: JSON.stringify({ url: gifURL, comment: comment })
  })
  .then(response => response.json())
  .then(makePost)
  .catch(console.log);
}

 // post has an id, comment, and url
 function makePost(post) {
   const div = document.createElement("div");
   const img = document.createElement("img");
   const input = document.createElement("input");
   const deleteBtn = document.createElement("button");
   // THIS IS SUPER WEIRD, WE SHOULD ADD AN ACTUAL FORM
   const submit = document.createElement("button");

   submit.innerText = "Edit";
   submit.dataset.postId = post.id;

   img.src = post.url;
   input.type = "text";
   input.value = post.comment;
   deleteBtn.innerText = "Destroy Cat";
  //  deleteBtn.id = post.id;
  deleteBtn.dataset.postId = post.id;
  // ATTACH LISTENER TO EACH DELETE BUTN
  // deleteBtn.addEventListener("click", (e) => {

  // })

   div.append(img, input, submit, deleteBtn);
   postsSection.append(div);
 }

 // FETCH ALL THE CAT GIFS AND COMMENTS AND SHOW THEM THE SECTION WITH CLASS POSTS
fetch(ENDPOINT)
.then(response => response.json())
.then(posts => {
  posts.forEach(makePost);
});


 // CREATE A NEW CAT GIF IN THE BACKEND AND DISPLAY IT ON THE FRONTEND



 // EDIT A CAT GIF

function generalFetch(url, options = {}) {
  return fetch(url, options)
  .then(res => res.json());
}

function makeOptions(method, body) {
  return {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
}
// generalFetch(url, {/* options */})
// .then(/* populate the DOM */)

 // DELETE A CAT GIF
postsSection.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.postId;

    const buttonText = e.target.innerText;
    const parent = e.target.parentElement;

    if (buttonText === "Destroy Cat") {
      // HOW TO REMOVE DIV
      fetch(`${ENDPOINT}/${id}`, {
        method: "DELETE"
      })
      .then(() => {
        parent.remove();
        // if button was really nested, would probably want to put an attr
        // on the div, find it, grab it, then delete it
      });
    } else if (buttonText === "Edit") {
      // Patch request
      const input = parent.querySelector("input");

      fetch(`${ENDPOINT}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment: "Edit: " + input.value })
      })
      .then((response) => response.json())
      .then(post => {
        

        input.value = post.comment;
      });
    }
  }
});
