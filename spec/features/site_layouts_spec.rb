require 'rails_helper'

RSpec.describe 'SiteLayouts', type: :feature do
  describe 'レイアウト' do
    it 'TOPページ' do
      visit root_path
      expect(page).to have_link 'Use Shortcut', href: root_path
      expect(page).to have_link 'TOP', href: root_path
      expect(page).to have_link 'ランキング', href: timeatacks_path
      expect(page).to have_link 'ログイン', href: login_path
      expect(page).to have_link 'ユーザー登録', href: signup_path
      expect(page).to have_link 'テキスト操作', href: text_path
      expect(page).to have_link 'Visual Studio Code', href: vscode_path
    end

    it '/text' do
      visit text_path
      expect(page).to have_link 'Mac', href: text_mac_path
      expect(page).to have_link 'Windows', href: text_win_path
    end

    it '/text_mac' do
      visit text_mac_path
      expect(page).to have_link '練習モード', href: text_mac_practice_path
      expect(page).to have_link 'タイムアタックモード', href: text_mac_test_path
    end

    it '/text_win' do
      visit text_win_path
      expect(page).to have_link '練習モード', href: text_win_practice_path
      expect(page).to have_link 'タイムアタックモード', href: text_win_test_path
    end

    it '/vscode' do
      visit vscode_path
      expect(page).to have_link 'Mac', href: vscode_mac_path
      expect(page).to have_link 'Windows', href: vscode_win_path
    end

    it '/vscode_mac' do
      visit vscode_mac_path
      expect(page).to have_link '練習モード', href: vscode_mac_practice_path
      expect(page).to have_link 'タイムアタックモード', href: vscode_mac_test_path
    end

    it '/vscode_win' do
      visit vscode_win_path
      expect(page).to have_link '練習モード', href: vscode_win_practice_path
      expect(page).to have_link 'タイムアタックモード', href: vscode_win_test_path
    end
  end
end
