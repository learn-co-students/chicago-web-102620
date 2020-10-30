class Fish < Pet
  # attr_reader :name
  # attr_accessor :mood

  def initialize(name, age, fin_count)
    @fin_count = fin_count
    # call initialize on my superclass
    super(name, age)
    # @name = name
    # @mood = "nervous"
  end
end
