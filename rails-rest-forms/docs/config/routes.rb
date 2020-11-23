Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :doctors, only: [:index, :show, :new, :create]
  # get '/doctors', to: 'doctors#index', as: 'doctors' # doctors_path
  # get '/doctors/:id', to: 'docotrs#show' as: 'doctor' # doctor_path(<instance of doctor>)
  # get '/doctors/new', to: 'doctors#new', as: 'new_doctor' # new_doctor_path
  # post '/doctors/' to: 'doctors#create'

  # get '/muhidin', to: 'doctors#yay_muhidin'
  get '/muhidin', to: 'doctors#yay_muhidin', as: 'anything' # anything_path
end
