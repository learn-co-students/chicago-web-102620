class Book < ActiveRecord::Base

  # @@all = []

  # def initialize(title, description)
  #   @title = title
  #   @description = description

  #   @@all << self
  # end

  # def save 
  #   sql = <<-SQL
  #     INSERT INTO books (title, description)
  #     VALUES (?, ?);
  #   SQL

  #   DB[:conn].execute(sql, self.title, self.description)
  # end

  # def self.all
  #   @@all
  # end

  # def self.find(title)
  #   all.find do |book|
  #     book.title == title
  #   end
  # end
  def print_title_twice
    puts title * 2
  end
end