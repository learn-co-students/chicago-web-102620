class PokemonsController < ApplicationController
  def create
    trainer = Trainer.find_by_id(params[:trainer_id])
    pokemon_count = trainer.pokemons.count

    if pokemon_count >= 6
      render json: { error: "You have reached your poke limit" }
      return
    end

    pokemon = Pokemon.new(
      nickname: Faker::Name.first_name, 
      species: Faker::Games::Pokemon.name, 
      trainer_id: params[:trainer_id])

    if pokemon.save
      render json: pokemon
    else
      render json: { error: "Something went wrong. Cannot create pokemon." }
    end
  end

  def destroy
    pokemon = Pokemon.find_by_id(params[:id])

    if pokemon.destroy
      render json: pokemon
    else
      render json: { error: "Could not delete pokemon" }
    end
  end
end

# When adding a new pokemon, the nickname should be generated using the
#   `Faker::Name` gem and the species should be generated using the
#   `Faker::Games::Pokemon` gem. See the seeds.rb file above as an example.

# POST /pokemons
# #=> Example Response
# {
#   "id":147,
#   "nickname":"Gunnar",
#   "species":"Weepinbell",
#   "trainer_id":1
# }

# DELETE /pokemons/:pokemon_id

# #=> Example Response
# {
#   "id":147,
#   "nickname":"Gunnar",
#   "species":"Weepinbell",
#   "trainer_id":1
# }