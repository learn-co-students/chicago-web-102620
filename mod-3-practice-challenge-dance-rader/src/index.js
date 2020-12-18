// - See the first dancer's details, including their **name, image, description, likes, and feedback**, when the page loads
function setDancerImage(url) {
  const image = document.querySelector("#dancer-img");
  image.src = url;
}

function setDancerName(name) {
  const h2 = document.querySelector("#dancer-name");
  h2.textContent = name;
}

function setDancerDescription(description) {
  const p = document.querySelector("#dancer-description");
  p.textContent = description;
}

function setDancerLikeCount(count) {
  const span = document.querySelector("#like-count");
  span.textContent = count;
}

function createSingleFeedback({ feedback, id }) {
  const li = document.createElement("li");
  li.textContent = feedback;
  li.dataset.feedbackId = id;

  return li;
}

function addDancerIdToLikeButtons(id) {
  const likeButton = document.querySelector("#like");
  const unlikeButton = document.querySelector("#unlike");

  likeButton.dataset.dancerId = id;
  unlikeButton.dataset.dancerId = id;
}

const feedbackUl = document.querySelector(".feedback ul");

function setDancerDetails({ image, name, description, likes, feedback, id }) {
  setDancerImage(image);
  setDancerName(name);
  setDancerDescription(description);
  setDancerLikeCount(likes);
  // NEED TO ADD FEEDBACK

  feedbackUl.textContent = "";
  feedback.forEach((fb) => {
    feedbackUl.append(createSingleFeedback(fb));
  });

  addDancerIdToLikeButtons(id);
}

let likes = 0;
const feedbackForm = document.querySelector("form");

fetchFirstDancer()
.then((dancer) => {
  setDancerDetails(dancer);
  likes = dancer.likes;
  feedbackForm.dataset.dancerId = dancer.id;
});

// {
//   id: 1,
//   name: "Carlton",
//   image: "https://i.imgur.com/iM8ybeC.gif",
//   description: "20 years of experience in all forms of dance. Known for shiny outfits.",
//   likes: 23,
//   feedback: [
//   {
//   id: 1,
//   dancerId: 1,
//   feedback: "Nice moves!"
//   },
//   {
//   id: 2,
//   dancerId: 1,
//   feedback: "Never stop never stopping"
//   }
//   ]
//   }


// - Like the dancer and **still see the new number of likes when reloading the page**
// ADVANCED: reduce likes also

const likesDiv = document.querySelector(".likes");

likesDiv.addEventListener("click", (e) => {
  const clickedParent = e.target.parentElement;

  if (clickedParent.tagName === "BUTTON") {
    if (clickedParent.id === "like") {
      ++likes;
    } else {
      --likes;

      if (likes < 0) {
        likes = 0;
      }
    }

    const dancerId = clickedParent.dataset.dancerId;

    patchDancerLikes(dancerId, likes)
    .then(dancer => {
      setDancerLikeCount(dancer.likes);
    });
  }
});

// THIS WAS THE CODE FOR JUST INCREMENTING THE LIKES AND THAT'S IT
// const likeButton = document.querySelector("#like");

// likeButton.addEventListener("click", (e) => {
//   // get dancer id from the button
//   // increase the likes
//   // update the backend
//   // udpate the dom with the response
//   const dancerId = e.currentTarget.dataset.dancerId;

//   ++likes;

//   patchDancerLikes(dancerId, likes)
//   .then(dancer => {
//     setDancerLikeCount(dancer.likes);
//   });
// });
// END INCREMENTING

// - Leave feedback for the dancer (no persistence needed, will disappear on refresh)
// - ADVANCED: Still see the feedback after refreshing the page (Once you implement this, the core test for feedback may fail)
// grab form
// add event listener
// get data from input
// put data in feedback ul as an li (we have a function to make the li)
const feedbackInput = document.querySelector("#new-feedback");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // to make post request, need dancer id from form
  // also need the feedback string itself
  const dancerId = parseInt(e.currentTarget.dataset.dancerId, 10);
  const fb = feedbackInput.value;

  postFeedback(dancerId, fb)
  .then(feedback => {
    const li = createSingleFeedback(feedback);

    feedbackUl.append(li);
  });

  e.currentTarget.reset();
});

// Delete feedback (persistent) (For tests to work, make the LI delete on click instead of adding a button)
// first we added dataset ids to the feedback lis
// next i want to get the feedback ul and add an event listener
// check which feedback was clicked, remove it from back and front ends

feedbackUl.addEventListener("click", (e) => {
  const feedbackId = parseInt(e.target.dataset.feedbackId, 10);

  // could also check if target has tagname of LI
  if (Number.isInteger(feedbackId)) {
    e.target.remove();
    // still need to rmeove from back
    // optimistic rendering
    deleteFeedback(feedbackId);
  }
});

// See a menu of dancers. Clicking a dancer's name should update the page to show that dancer's
// details (it's not necessary for patch or post requests to work)

// to make menu, must clear it
// then add each dancer as a button in an li to the nav ul
const navUl = document.querySelector("nav ul");
navUl.textContent = "";

let allDancers;

fetchAllDancers()
.then(dancers => {
  dancers.forEach(dancer => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    button.dataset.dancerId = dancer.id;
    button.textContent = dancer.name;
    li.append(button);
    navUl.append(li);

    allDancers = dancers;
  });
});

// when user clicks in nav
// find out which button was clicked, and get dancer id from it
// find that dancer in allDancers, and use that data to change the DOM
navUl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const dancerId = parseInt(e.target.dataset.dancerId, 10);

    const dancer = allDancers.find(dancer => dancer.id === dancerId);
    setDancerDetails(dancer);
  }
});
