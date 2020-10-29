class User
    attr_reader :username
    
    def initialize(username)
        @username = username
    end

    def post_tweet(message)
        Tweet.new(message, self)
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.author == self
        end
    end

    def like_tweet(tweet)
        Like.new(self, tweet)
    end

    def likes
        Like.all.select do |like|
            like.liker == self
        end
    end

    def liked_tweets
        likes.map do |like|
            like.tweet
        end
    end

    def liked_tweets_messages
        liked_tweets.map do |tweet|
          tweet.message
        end
     end
end