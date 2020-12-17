//   {
//   id: 3,
//   url: "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/112323/wolfs_rain_chasing_flowers1.jpg",
//   name: "Glowing Mystery"
//   }

/* <nav>
  <ul>

  </ul>
</nav> */

const navUl = document.querySelector("nav ul");

function showPlant(plant) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");

  img.src = plant.url;
  h2.textContent = plant.name;
  li.dataset.plantId = plant.id;

  li.append(img, h2);
  navUl.append(li);
}

const BASE_URL = "http://localhost:3000";
const PLANT_URL = `${BASE_URL}/plants`;
// POPULATE THE FEED

const FEED_URL = `${BASE_URL}/feed`;
const feedUl = document.querySelector(".feed ul");

function addComment(comment, name) {
  const li = document.createElement("li");
  li.textContent = `${comment.user} said "${comment.comment}" about ${name}`;
  li.dataset.feedId = comment.id;
  feedUl.append(li);
}

// PLANTS HAS DATA ON EVERY PLANT!!
function populateFeed(plants) {
  fetch(FEED_URL)
  .then(res => res.json())
  .then(feed => {
    feedUl.textContent = "";

/* comment has an id, plantId, comment, user */

    feed.forEach(comment => {
      const plant = plants.find(plant => plant.id === comment.plantId);

      addComment(comment, plant.name);
    });
  });
}

let allPlants;

// SHOW PLANTS FROM DB IN NAVIGATION
fetch(PLANT_URL)
.then(res => res.json())
.then(plants => {
  allPlants = plants;

  // clear ul holding plants
  navUl.textContent = "";

  plants.forEach(plant => {
    showPlant(plant);
  });

  // Make the feed now!!
  populateFeed(plants);
});

/* feed: [
  {
  id: 1,
  plantId: 1,
  comment: "It's so beautiful I could cries",
  user: "Bred Patt"
  } */

/* <div class="feed">
      <h2>Feed</h2>
      <ul>
        <li>User said "some words" about plant name.</li>
        <li>User said "some words" about plant name.</li>
        <li>User said "some words" about plant name.</li>
        <li>User said "some words" about plant name.</li>
      </ul>
    </div> */

// ADD EVENT LISTENER TO NAV FOR PLANT CLICKS

const nav = document.querySelector("nav");
let chosenPlantId = 1;

nav.addEventListener("click", (e) => {
  const parent = e.target.parentElement;

  if (parent.tagName === "LI") {
    const plantId = parent.dataset.plantId;

    chosenPlantId = parseInt(plantId, 10);
  }
});


// MAKE A COMMENT IN THE FEED IN THE BACKEND AND FRONTEND
const userInput = document.querySelector("#username");
const commentInput = document.querySelector("#comment");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  fetch(FEED_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      plantId: chosenPlantId, 
      user: userInput.value, 
      comment: commentInput.value })
  })
  .then(res => res.json())
  .then(comment => {
    const plant = allPlants.find(plant => plant.id === comment.plantId);
    addComment(comment, plant.name);
  });

  form.reset();
});

feedUl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // remove the li from the front and backend
    const id = e.target.dataset.feedId;

    fetch(`${FEED_URL}/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      e.target.remove();
    });
  }
});