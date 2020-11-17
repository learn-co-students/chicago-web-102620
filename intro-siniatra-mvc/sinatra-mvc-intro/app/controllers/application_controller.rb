class ApplicationController < Sinatra::Base
  set :views, "app/views"
  set :method_override, true

  # home
  get "/" do
    erb :home
  end

  # index
  get "/books" do
    @books = Book.all

    erb :index
  end

  # new
  get "/books/new" do

    erb :new
  end
  
  # show
  get "/books/:id" do
    @book = Book.find(params[:id])  
    
    erb :show
  end

  # create
  post "/books" do
    book = Book.create(params)

    redirect "/books/#{book.id}"
  end

  # edit
  get "/books/:id/edit" do
    @book = Book.find(params[:id])  
    
    erb :edit
  end

  # update
  put "/books/:id" do
    params.delete("_method")
    book = Book.find(params[:id])
    book.update(params)

    redirect "/books/#{book.id}"
  end

  # delete
  delete "/books/:id" do
    book = Book.find(params[:id])
    book.delete

    redirect "/books"
  end
end