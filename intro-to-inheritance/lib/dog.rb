class Dog < Pet
  # attr_reader :name, :age, :breed
  # attr_writer :name, :age, :breed
  attr_accessor :breed
  # attr_accessor :mood
  @@all = []

  def initialize(name, age, breed)
    
    # @name = name
    # @age = age
    @breed = breed
    super(name, age)
    # @mood = "nervous"

    @@all << self
  end

  def find_puppies
    # Puppy.all.select do |puppy|
    #   puppy.dog == self
    # end
  end

  def self.all
    @@all
  end
end
