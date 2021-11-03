require 'rails_helper'

RSpec.describe "SiteLayouts", type: :feature do
  it 'Homeのリンク' do
    visit root_path
    expect(page).to have_link 'Use Shortcut', href: root_path 
    expect(page).to have_link 'TOP', href: root_path
    expect(page).to have_link 'ログイン'
    expect(page).to have_link 'ユーザー登録'
  end
end
