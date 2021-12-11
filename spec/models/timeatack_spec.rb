require 'rails_helper'

RSpec.describe Timeatack, type: :model do
  let(:user) { create(:user) }

  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      timeatack = build(:timeatack, user_id: user.id)
      expect(timeatack).to be_valid
    end
  end

  context 'user_idが存在しない場合' do
    it '無効であること' do
      timeatack = build(:timeatack, user_id: nil)
      expect(timeatack).to be_invalid
    end
  end

  context 'user_idが存在しないuserの場合' do
    it '無効であること' do
      timeatack = build(:timeatack, user_id: 2)
      expect(timeatack).to be_invalid
    end
  end
end
