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
    resources :sheet_attributes
    resources :attack_logics
    resources :action_types
    resources :users

    root to: "spells#index"
  end

  namespace :api do
    resources :damage_types, only: [:index, :show]
    resources :action_types, only: [:index, :show]
    resources :attack_logics, only: [:index, :show]
    resources :sheet_attributes, only: [:index, :show]
    resources :character_inventorys, only: [:index, :show]
    resources :character_role_spells, only: [:index, :show]
    resources :character_roles, only: [:index, :show]
    resources :culture_initial_items, only: [:index, :show]
    resources :culture_spells, only: [:index, :show]
    resources :cultures, only: [:index, :show]
    resources :elements, only: [:index, :show]
    resources :initial_items, only: [:index, :show]
    resources :item_initial_items, only: [:index, :show]
    resources :item_spells, only: [:index, :show]
    resources :item_types, only: [:index, :show]
    resources :items, only: [:index, :show]
    resources :negative_effects, only: [:index, :show]
    resources :range_types, only: [:index, :show]
    resources :specie_spells, only: [:index, :show]
    resources :species, only: [:index, :show]
    resources :spells, only: [:index, :show]
    resources :characters, only: [:index, :show]
  end

  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login }

    resource :user, only: [:show, :update]
  end

  root to: "index#index"
end
