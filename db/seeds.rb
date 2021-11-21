User.create!(name:  "Example User",
  email: "example@railstutorial.org",
  password:              "foobar",
  password_confirmation: "foobar",
  admin: true)

User.create!(name:  "Example User2",
  email: "example2@railstutorial.org",
  password:              "foobar",
  password_confirmation: "foobar",)

user1 = User.find(1)
user2 = User.find(2)
user1.timeatacks.create!(time: 15)
user2.timeatacks.create!(time: 16)
user1.timeatacks.create!(time: 17)
user2.timeatacks.create!(time: 18)
user1.timeatacks.create!(time: 19)
user2.timeatacks.create!(time: 20)
user1.timeatacks.create!(time: 21)
user1.timeatacks.create!(time: 22)
user2.timeatacks.create!(time: 14)
user2.timeatacks.create!(time: 18)
user1.timeatacks.create!(time: 48)