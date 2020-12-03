Rails.application.routes.draw do
  resources :users, only: [:create]
  get "/", to: "application#home"
  get "user", to: "users#show"
  get "signup", to: "users#new"
  get "login", to: "sessions#new"
  delete "sessions", to: "sessions#destroy"
  post "new_session", to: "sessions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
