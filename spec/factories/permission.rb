FactoryGirl.define do
  factory :permission, class: NotesUsers do
    user
    note
  end
end