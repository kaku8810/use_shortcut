require 'rails_helper'

RSpec.describe User, type: :feature do

  describe 'ログイン前' do
    describe 'ユーザー新規作成' do
      context 'フォームの入力値が正常' do
        it 'ユーザーの新規作成が完了する' do
          visit signup_path
          fill_in 'user[name]', with: 'テストユーザー'
          fill_in 'user[email]', with: 'test@example.com'
          fill_in 'user[password]', with: 'password'
          fill_in 'user[password_confirmation]', with: 'password'
          click_button 'ユーザー登録'
          expect(current_path).to eq root_path
          expect(page).to have_content 'ユーザー登録が成功しました!'
        end
      end

      context 'ユーザー名が未入力' do
        it 'ユーザーの新規作成が失敗する' do
          visit signup_path
          fill_in 'user[name]', with: ''
          fill_in 'user[email]', with: 'test@example.com'
          fill_in 'user[password]', with: 'password'
          fill_in 'user[password_confirmation]', with: 'password'
          click_button 'ユーザー登録'
          expect(current_path).to eq users_path
          expect(page).to have_content "Name can't be blank"
        end
      end

      context 'メールアドレスが未入力' do
        it 'ユーザーの新規作成が失敗する' do
          visit signup_path
          fill_in 'user[name]', with: 'テストユーザー'
          fill_in 'user[email]', with: ''
          fill_in 'user[password]', with: 'password'
          fill_in 'user[password_confirmation]', with: 'password'
          click_button 'ユーザー登録'
          expect(current_path).to eq users_path
          expect(page).to have_content "Email can't be blank"
        end
      end

      context 'パスワードが5文字以下の場合' do
        it 'ユーザーの新規作成が失敗する' do
          visit signup_path
          fill_in 'user[name]', with: 'テストユーザー'
          fill_in 'user[email]', with: 'test@example.com'
          fill_in 'user[password]', with: 'hoge'
          fill_in 'user[password_confirmation]', with: 'hoge'
          click_button 'ユーザー登録'
          expect(current_path).to eq users_path
          expect(page).to have_content "Password is too short (minimum is 6 characters)"
        end
      end

      context 'パスワードとパスワード確認が一致していない場合' do
        it 'ユーザーの新規作成が失敗する' do
          visit signup_path
          fill_in 'user[name]', with: 'テストユーザー'
          fill_in 'user[email]', with: 'test@example.com'
          fill_in 'user[password]', with: 'password'
          fill_in 'user[password_confirmation]', with: 'hogehoge'
          click_button 'ユーザー登録'
          expect(current_path).to eq users_path
          expect(page).to have_content "Password confirmation doesn't match Password"
        end
      end
      
    end
  end
end
