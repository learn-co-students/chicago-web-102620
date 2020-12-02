Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]
  patch '/cart', to: 'cart#update', as: 'add_to_cart'
end
