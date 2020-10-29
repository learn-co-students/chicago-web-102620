class Tweet 
    attr_reader :message, :author

    @@all = []

    def initialize(message, author)
        @message = message
        @author = author

        @@all << self
    end

    def username
        @author.username
    end

    def self.all
        @@all
    end

    def likes
        Like.all.select do |like|
            like.tweet == self
        end
    end

    def likers
        likes.map do |like|
            like.user
        end
    end
end