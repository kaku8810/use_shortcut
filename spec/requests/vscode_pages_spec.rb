require 'rails_helper'

RSpec.describe 'VscodePages', type: :request do
  describe 'GET /vscode' do
    it 'gets vscode' do
      get vscode_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_mac' do
      get vscode_mac_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_mac_practice' do
      get vscode_mac_practice_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_mac_test' do
      get vscode_mac_test_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_win' do
      get vscode_win_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_win_practice' do
      get vscode_win_practice_path
      expect(response).to have_http_status(:ok)
    end

    it 'gets vscode_win_test' do
      get vscode_win_test_path
      expect(response).to have_http_status(:ok)
    end
  end
end
