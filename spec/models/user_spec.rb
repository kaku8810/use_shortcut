require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { build(:user) }

  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      expect(user).to be_valid
    end
  end

  context 'nameが存在しない場合' do
    it '無効であること' do
      user.name = ''
      expect(user).to be_invalid
    end
  end

  context 'nameが50文字以下の場合' do
    it '有効であること' do
      user.name = 'a' * 50
      expect(user).to be_valid
    end
  end

  context 'nameが51字以上の場合' do
    it '無効であること' do
      user.name = 'a' * 51
      expect(user).to be_invalid
    end
  end

  context 'emailが存在しない場合' do
    it '無効であること' do
      user.email = ''
      expect(user).to be_invalid
    end
  end

  context 'emailが255字以下の場合' do
    it '有効であること' do
      user.email = "#{'a' * 243}@example.com"
      expect(user).to be_valid
    end
  end

  context 'emailが256字以上の場合' do
    it '無効であること' do
      user.email = "#{'a' * 244}@example.com"
      expect(user).to be_invalid
    end
  end

  context 'emailが〇〇＠〇〇.〇〇のフォーマット以外の場合' do
    it '無効であること' do
      user.email = 'test@example'
      expect(user).to be_invalid
    end
  end

  context 'emailが重複している場合' do
    it '無効であること' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)
      expect(user2).to be_invalid
    end
  end

  context 'passwordが存在しない場合' do
    it '無効であること' do
      user.password = user.password_confirmation = '' * 6
      expect(user).to be_invalid
    end
  end

  context 'passwordが6文字以下の場合' do
    it '無効であること' do
      user.password = user.password_confirmation = 'a' * 5
      expect(user).to be_invalid
    end
  end

  context 'password_confirmationがpasswordと一致していない場合' do
    it '無効であること' do
      user.password_confirmation = 'hogehoge'
      expect(user).to be_invalid
    end
  end
end
