Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root "index#index"

  # If contraints are needed:
  # constraints: { subroute: /(?!admin|login|logout).*/ }

  get '*subroute', to: 'index#index'

  # Wildcard generic rails route for react app
end
