class App
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)

    if req.path.match("/about")
      status_code = 200
      header = {}
      body = ['about']

      return [status_code, header, body]
    elsif req.path.match("/")
      status_code = 200
      header = {}
      body = ['hello']

      return [status_code, header, body]
    end
  end
end