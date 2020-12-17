const patchForm = document.querySelector("#patch-plant");
const nameInput = document.querySelector("#plant-name");

// MAKE A PATCH REQUEST TO UPDATE THE PLANT'S NAME IN BACK AND FRONTEND
// PLANT ID IS STORED IN A VARIABLE THAT'S GLOBAL IN A DIFFERENT FILE
// AND IT'S SET WHEN CLICKING A PLANT, BUT DEFAULTS TO 1 ON PAGE LOAD

patchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // just update plant name here before fetching
  // optimistic rendering

  fetch(`${PLANT_URL}/${chosenPlantId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: nameInput.value })
  })
  .then(res => res.json())
  .then(plant => {
    const plantLi = document.querySelector(`li[data-plant-id='${plant.id}']`);
    const h2 = plantLi.querySelector("h2");
    
    h2.textContent = plant.name;
  })
  .catch(console.log);

  patchForm.reset();
}); 

// GET PLANT ID OF LI THAT WAS CLICKED BY LISTENING FOR CLICK ON PARENT NAV ELEMENT

// nav.addEventListener("click", (e) => {
//   const clickParent = e.target.parentElement;
//   const clickedPlantId = clickParent.dataset.plantId;

//   if (clickedPlantId !== undefined) {
//     fetch(`${PLANT_URL}/${clickedPlantId}`, {
//       method: "DELETE"
//     })
//     .then(() => {
//       clickParent.remove();
//     })
//     .catch(console.log);
//   }
// });
