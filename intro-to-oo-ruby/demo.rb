require "pry"
# have attributes
# have method

class BankAccount
  attr_reader :balance
  attr_accessor :user_name

  @@all = []
  @@owner = "Joe Shmoe"

  def initialize(name, balance)
    @user_name = name
    @balance = balance

    @@all << self # the new instance
  end

  def self.say_goodbye # references the class (class method)
    # puts "byeeee"
    random_var = "somethign cool"
    
    @user_name
  end

  def self.all
    @@all
  end

  def self.update_owner (new_owner)
    @@owner = new_owner
  end

  def say_hi
    @balance
  end
  # # get name
  # def user_name
  #   return @user_name
  # end

  # # set name
  # def user_name=(new_name)
  #   @user_name = new_name
  # end

  # # get name
  # def balance
  #   return @balance
  # end

  # # set name
  # def balance=(new_name)
  #   @balance = new_name
  # end

  
  def add_to_ten(num)
    puts num + 10
  end
end

binding.pry