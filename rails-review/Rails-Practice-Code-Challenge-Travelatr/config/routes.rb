Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :bloggers, only: [:show, :new, :create]
  resources :posts, only: [:show, :new, :create]
  resources :destinations, only: [:show]
  patch 'posts/:id/like', to: "posts#like", as: "like_post"
end
