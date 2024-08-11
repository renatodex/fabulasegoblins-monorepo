Rails.application.routes.draw do
  mount Motor::Admin => '/motor_admin'
  namespace :api do
    resources :damage_types, only: [:index, :show]
    resources :action_types, only: [:index, :show]
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
    resources :grimos, only: [:index, :show]
    resources :negative_effects, only: [:index, :show]
    resources :range_types, only: [:index, :show]
    resources :specie_spells, only: [:index, :show]
    resources :species, only: [:index, :show]
    resources :spells, only: [:index, :show]
    resources :characters, only: [:index, :show, :create, :update]
  end
  scope :api, defaults: { format: :json } do
    devise_for :users, controllers: { sessions: :sessions },
                       path_names: { sign_in: :login, sign_out: :logout }

    resource :user, only: [:show, :update]
  end

  root to: "index#index"
end
