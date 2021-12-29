User.create!(name: '山田太郎',
             email: 'example@hogehoge.org',
             password: 'foobar',
             password_confirmation: 'foobar',
             admin: true)

User.create!(name: '田中花子',
             email: 'example2@hogehoge.org',
             password: 'foobar',
             password_confirmation: 'foobar')

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
