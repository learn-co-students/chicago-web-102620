class Destination < ApplicationRecord
  has_many :posts
  has_many :bloggers, through: :posts

  def featured_post
    posts.order(likes: :desc).first
  end

  def average_age
    unique_bloggers_ages = bloggers.uniq.map do |blogger|
      blogger.age
    end
    
    unique_bloggers_ages.sum
  end

  def recent_posts
    posts.order(created_at: :desc).limit(5)
  end
end
