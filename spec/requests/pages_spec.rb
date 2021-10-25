require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET /pages" do
    it "should get home" do
      get root_path
      expect(response).to have_http_status(200)
    end

    it "should get text" do
      get text_path
      expect(response).to have_http_status(200)
    end

    it "should get text_mac" do
      get text_mac_path
      expect(response).to have_http_status(200)
    end

    it "should get text_mac_practice" do
      get text_mac_practice_path
      expect(response).to have_http_status(200)
    end

    it "should get text_mac_test" do
      get text_mac_test_path
      expect(response).to have_http_status(200)
    end

    it "should get text_win" do
      get text_win_path
      expect(response).to have_http_status(200)
    end

    it "should get text_win_practice" do
      get text_win_practice_path
      expect(response).to have_http_status(200)
    end

    it "should get text_win_test" do
      get text_win_test_path
      expect(response).to have_http_status(200)
    end
  end
end
