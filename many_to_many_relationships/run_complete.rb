require "pry"

require_relative "tweet_complete.rb"
require_relative "user_complete.rb"
require_relative "like_complete.rb"
require_relative "self_example.rb"
joe = User.new('joe')
sam = User.new('sam')

joes_tweet = joe.post_tweet('my great tweet')
sams_liked_tweets = sam.like_tweet(joes_tweet)

binding.pry