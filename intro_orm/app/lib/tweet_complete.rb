class Tweet
  attr_accessor :message, :username
  # @@all = []

  def initialize(attrs={})
    @message = attrs['message']
    @username = attrs['username']

    # @@all << self
  end

  def save
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?)
    SQL

    DB[:conn].execute(sql, self.username, self.message)
  end


  def self.all
    sql = <<-SQL
      SELECT * FROM tweets
    SQL

    DB[:conn].execute(sql)
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS tweets (
        id INTEGER PRIMARY KEY,
        username TEXT,
        message TEXT
      )
    SQL
    DB[:conn].execute(sql)
  end
end
