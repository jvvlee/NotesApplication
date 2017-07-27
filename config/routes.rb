Rails.application.routes.draw do
  root 'site#new'

  get    '/login',  to: 'sessions#new'
  post   '/login',  to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users, only: [:new, :create]

  namespace :api do 
  	resources :notes
  end
end
