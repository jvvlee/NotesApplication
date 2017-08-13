FactoryGirl.define do
  factory :note do
    content "This belongs to user #{user_id}"
  end
end