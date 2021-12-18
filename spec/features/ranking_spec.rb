require 'rails_helper'

RSpec.describe 'Ranking', type: :feature do
  describe '10件以上データが存在する場合' do
    it '10件しか表示されないこと' do
      create_list(:timeatack, 11)
      visit root_path
      click_on 'ランキング'
      expect(page).to have_current_path timeatacks_path, ignore_query: true
      expect(page).to have_selector 'h1', text: 'ランキング'
      within 'tbody' do
        expect(page.all('tr').count).to eq 10
      end
    end
  end
end
