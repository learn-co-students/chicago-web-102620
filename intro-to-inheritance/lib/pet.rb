class Pet
  attr_reader :name
  attr_accessor :mood, :age

  def initialize(name, age)
    @name = name
    @age = age
    @mood = "nervous"
  end

  def say_hi
    "hi"
  end
end
