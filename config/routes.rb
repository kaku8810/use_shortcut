Rails.application.routes.draw do
  root 'pages#home'
  get '/text', to: 'pages#text'
  get '/text_mac', to: 'pages#text_mac'
  get '/text_mac_practice', to: 'pages#text_mac_practice'
  get '/text_mac_test', to: 'pages#text_mac_test'
  get '/text_win', to: 'pages#text_win'
  get '/text_win_practice', to: 'pages#text_win_practice'
  get '/text_win_test', to: 'pages#text_win_test'

end
