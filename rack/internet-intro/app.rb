class App
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    status_code = 200
    headers = {}

    if req.path == "/about"
      body = ["this is the about page"]
    elsif req.path == "/contact"
      body = ["this is the contact page"]
    elsif req.path == "/"
      body = ["this is the home page"]
    else
      status_code = 400
      body = ["resource not found"]
    end
    return [status_code, headers, body]
  end
end