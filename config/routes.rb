Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:index, :show, :create]
    resources :posts, only: [:show, :create]
  end

  root to: "pages#root"
end
