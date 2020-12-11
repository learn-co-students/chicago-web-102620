
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

// event delegation
const soundsDiv = document.querySelector(".actions");

soundsDiv.addEventListener("click", function (e) {
  // console.log(e.target, "target");
  // console.log(e.currentTarget, "current target");

  // if target is how, then howl, etc
  // another option, if target is a button
  // grab the button id, then say alert the innerText

  if (e.target.tagName === "BUTTON") {
    alert(e.target.id);
  } else {
    console.log('just cuz');
  }
});

/* 
<div>
  <img src="https://media0.giphy.com/media/KcW2FVEJnzKeiZkVI1/giphy.gif">
  <p>This cat is so sad. Somebody hug him now!!</p>
</div> 
*/