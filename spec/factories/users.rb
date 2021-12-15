FactoryBot.define do
  factory :user do
    name { "test" }
    email { Faker::Internet.unique.email }
    password { "foobar" }
    password_confirmation { "foobar" }
  end
end
