const main = document.querySelector("main");

{/* <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li> */}
function showPokemon(pokemon, ul) {
  const li = document.createElement("li");
  li.textContent = `${pokemon.nickname} (${pokemon.species}) `;

  const button = document.createElement("button");
  button.textContent = "Release";
  button.classList.add("release");
  button.dataset.pokemonId = pokemon.id;

  li.append(button);
  ul.append(li);
}

// makes the entire pokemon ul and return it
// does not add ul to trainer div
function makePokemonUl(pokemons) {
  const ul = document.createElement("ul");

  pokemons.forEach(pokemon => {
    showPokemon(pokemon, ul);
  });

  return ul;
}

function showTrainer(trainer) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.dataset.id = trainer.id;

  const p = document.createElement("p");
  p.textContent = trainer.name;

  const button = document.createElement("button");
  button.dataset.trainerId = trainer.id;
  button.textContent = "Add Pokemon";

  const ul = makePokemonUl(trainer.pokemons);
  // makePokemonUl returns the pokemon ul and it gets appended
  div.append(p, button, ul);
  main.append(div);
}

// GET AND SHOW ALL TRAINERS AND THEIR POKES
generalFetch(TRAINERS_URL)
.then(trainers => {
  trainers.forEach(showTrainer);
});


/* TO DOs
2. Click Add Pokemon, if space on team, add poke
3. Click Release, remove poke from team
*/

/* POSTING A POKE
#=> Example Request
POST /pokemons

Required Headers:
{
  'Content-Type': 'application/json'
}

Required Body:
{
  "trainer_id": 1
}

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
*/

/* RELEASING A POKE
#=> Example Request
DELETE /pokemons/:pokemon_id

#=> Example Response
{
  "id":147,
  "nickname":"Gunnar",
  "species":"Weepinbell",
  "trainer_id":1
}
*/