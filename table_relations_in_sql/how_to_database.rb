require 'sqlite3'
require 'pry'

class Artist

end


class Album
    attr_accessor :artist
    
    def initialize(artist)
        @artist = artist
    end
end


db = SQLite3::Database.new('chinook.db')


puts db.execute("Select * FROM artists")