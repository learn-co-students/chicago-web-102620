class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts

  validates :name, uniqueness: true
  validates :age, numericality: { greater_than: 0 }
  validates :bio, length: { minimum: 30 }  

  # example for custom validations
  # validate :bio_length_validation

  # def bio_length_validation
  #   if self.bio.length <= 30
  #     self.errors.add(:bio, "length must be greater than 30")
  #   end
  # end

  def like_count
    posts.sum(:likes)
  end

  def most_liked
    posts.order(likes: :desc).first
  end

end
