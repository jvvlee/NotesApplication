# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_user = User.create!({
	username: "username",
	password: "password"
})

(1..3).each do |n|
	test_user.notes.create({title: "#{test_user.username} Note #{n}", content: "#{test_user.username} Note #{n}"})
end

test_user2 = User.create!({
	username: "username2",
	password: "password2"
})

(1..3).each do |n|
	test_user2.notes.create({title: "#{test_user2.username} Note #{n}", content: "#{test_user2.username} Note #{n}"})
end

