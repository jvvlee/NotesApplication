FactoryGirl.define do
  factory :note do
  	association :owner, factory: :user
  	title "Title"
    content "Content"
  end
end