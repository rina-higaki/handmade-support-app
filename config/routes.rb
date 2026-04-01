Rails.application.routes.draw do
  resources :items do
    collection do
      get :admin
      post :admin_create
    end
  end

  root "items#index"
end