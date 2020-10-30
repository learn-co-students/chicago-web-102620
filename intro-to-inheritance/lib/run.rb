require_relative '../config/environment'
require "pry"

spot = Dog.new("spot", 1, "Golden")
frankie = Dog.new("frankie", 1, "Golden")
bark = Dog.new("bark", 1, "Golden")

spot.name
spot.age
spot.breed

bubbly = Fish.new("bubbly", 3, 5)
bubbly.age
spot.age = 2
spot.breed = "Golden Doodle"


binding.pry
