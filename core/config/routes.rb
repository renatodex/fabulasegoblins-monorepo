Rails.application.routes.draw do
  namespace :admin do
    resources :spells
    resources :specie_spells
    resources :species
    resources :range_types
    resources :negative_effects
    resources :item_types
    resources :item_spells
    resources :item_initial_items
    resources :items
    resources :initial_items
    resources :elements
    resources :damage_types
    resources :culture_spells
    resources :culture_initial_items
    resources :cultures
    resources :character_role_spells
    resources :character_roles
    resources :characters
    resources :attributes
    resources :attack_logics
    resources :action_types
    resources :users

    root to: "spells#index"
  end

  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login }

    resource :user, only: [:show, :update]
    resources :damage_types, only: [:index]
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: "index#index"
end
