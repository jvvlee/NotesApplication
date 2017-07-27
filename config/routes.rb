Rails.application.routes.draw do
  root 'sessions#new' #will need to make this go to homepage

  get    '/login',  to: 'sessions#new' #need to redirect from here
  post   '/login',  to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/home', to: 'site#show'

  resources :users, only: [:new, :create]

  namespace :api do 
  	resources :notes
  end
end
