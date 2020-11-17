class ApplicationController < Sinatra::Base
  set :views, 'app/views'

  # home
  get '/' do
    @popular_books = Book.most_popular_books

    erb :home
  end

  # index
  get '/books' do
    @books = Book.all

    erb :index
  end

  # show
  get '/books/:id' do
    @book = Book.find(params[:id])  
    
    erb :show
  end

end