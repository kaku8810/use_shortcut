Rails.application.routes.draw do
  root 'pages#home'
  get '/text', to: 'pages#text'
  get '/text_mac', to: 'pages#text_mac'
  get '/text_mac_practice', to: 'pages#text_mac_practice'
  get '/text_mac_test', to: 'pages#text_mac_test'
  get '/text_win', to: 'pages#text_win'
  get '/text_win_practice', to: 'pages#text_win_practice'
  get '/text_win_test', to: 'pages#text_win_test'
  get '/vscode', to: 'vscode_pages#vscode'
  get '/vscode_mac', to: 'vscode_pages#vscode_mac'
  get '/vscode_mac_practice', to: 'vscode_pages#vscode_mac_practice'
  get '/vscode_mac_test', to: 'vscode_pages#vscode_mac_test'
  get '/vscode_win', to: 'vscode_pages#vscode_win'
  get '/vscode_win_practice', to: 'vscode_pages#vscode_win_practice'
  get '/vscode_win_test', to: 'vscode_pages#vscode_win_test'

  get '/signup', to: 'users#new'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :users
end
