class Like
    attr_accessor :liker, :tweet

    @@all = []

    def initialize(liker, tweet)
        @liker = liker
        @tweet = tweet

        @@all << self
    end

    def self.all
        @@all
    end
end