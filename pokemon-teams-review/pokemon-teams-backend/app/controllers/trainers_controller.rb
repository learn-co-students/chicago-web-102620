class TrainersController < ApplicationController
  def index
    trainers = Trainer.all

    render json: trainers, include: :pokemons
  end
end


# GET /trainers

# #=> Example Response
# [
#   {
#     "id":1,
#     "name":"Prince",
#     "pokemons":[
#       {
#         "id":140,
#         "nickname":"Jacey",
#         "species":"Kakuna",
#         "trainer_id":1
#       },
#       {
#         "id":141,
#         "nickname":"Zachariah",
#         "species":"Ditto",
#         "trainer_id":1
#       },
#       // ...
#     ]
#   }
#   // ...
# ]