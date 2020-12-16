main.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName !== "BUTTON") {
    return;
  }

  if (target.hasAttribute("data-trainer-id")) {
    // add a pokemon to the correct trainer
    const trainerId = target.dataset.trainerId;

    generalFetch(POKEMONS_URL, createOptions("POST", { trainer_id: trainerId }))
    .then(data => {
      if (data.error !== undefined) {
        alert(data.error);
        return;
      }

      // show the pokemon in the correct UL
      // find the UL inside of the div with the correct trainer id
      // and then add the pokemon li to it
      // document.querySelector("div[data-id='3']")

      const trainerDiv = document.querySelector(`div[data-id="${trainerId}"]`);

      showPokemon(data, trainerDiv.querySelector("ul"));
    });

    return;
  }

  const pokemonId = target.dataset.pokemonId;

  generalFetch(`${POKEMONS_URL}/${pokemonId}`, createOptions("DELETE"))
  .then(_ => {
    target.parentElement.remove();
  });
});