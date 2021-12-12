require 'rails_helper'

RSpec.describe 'UserSessions', type: :feature do
  let(:user) { create(:user) }

  describe 'ログイン前' do
    context 'フォームの入力値が正常' do
      it 'ログイン処理が成功する' do
        visit login_path
        fill_in 'session[email]', with: user.email
        fill_in 'session[password]', with: user.password
        click_button 'ログイン'
        expect(current_path).to eq root_path
        expect(page).to have_no_link 'ログイン'
        expect(page).to have_link 'ログアウト', href: logout_path
      end
    end

    context 'フォームが未入力' do
      it 'ログイン処理が失敗する' do
        visit login_path
        fill_in 'session[email]', with: ''
        fill_in 'session[password]', with: 'password'
        click_button 'ログイン'
        expect(current_path).to eq login_path
        expect(page).to have_content 'Invalid email/password combination'
      end
    end
  end

  describe 'ログイン後' do
    context 'ログアウトボタンをクリック' do
      it 'ログアウト処理が成功する' do
        visit login_path
        fill_in 'session[email]', with: user.email
        fill_in 'session[password]', with: user.password
        click_button 'ログイン'
        click_link 'ログアウト'
        expect(current_path).to eq root_path
        expect(page).to have_no_link 'ログアウト'
        expect(page).to have_link 'ログイン', href: login_path
      end
    end
  end
end
