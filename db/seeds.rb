test_user = User.create!({
	username: "username",
	password: "password"
})

(1..5).each do |n|
	test_user.notes.create({title: "#{test_user.username} Note #{n}", content: "#{test_user.username} Note #{n}"})
end

test_user2 = User.create!({
	username: "username2",
	password: "password2"
})

(1..5).each do |n|
	test_user2.notes.create({title: "#{test_user2.username} Note #{n}", content: "#{test_user2.username} Note #{n}"})
end

#Permissions

test_user2.notes.first.share_with_user(test_user, 1)
test_user2.notes.last.share_with_user(test_user, 2)

test_user3 = User.create!({
	username: "username3",
	password: "password3"
})

