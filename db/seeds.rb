# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

%w(Sennacy Rocky Prins).each do |name|
  user = User.create!(
    first_name: name,
    last_name: "the Cat",
    email: "#{name.downcase}@example.com",
    password: "123456"
  )
  
  3.times do |i|
    user.posts.create!(
      title: "meow " * (i + 1),
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    )
  end
end




50.times do |i|
  user = User.create!(
    first_name: "Ninja",
    last_name: "##{ i + 1 }",
    email: "#{ i + 1 }@example.ninja",
    password: "123456"
  )
  
  ninjiisms = ["Wu-ahh!", "Woa-chau!", "BLLLLLLLL SENGHAAAAAAAA!!!!", "BBBYYYYAAAAAAAAAAHHHHH!"]
  user.posts.create!(
    title: ninjiisms.sample,
    body: "Ninjas say: #{ ninjiisms.to_sentence }"
  )
end