Rails.application.routes.draw do
  get 'users/create'

  get 'users/new'

	root 'sessions#new'

	
end
