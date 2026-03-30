Rails.application.routes.draw do
  resources :items, only: [:index, :new, :create, :show]
  root "items#index"
end