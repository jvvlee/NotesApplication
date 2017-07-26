class Note < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_and_belong_to_many :users

  def initialize()
  end

  def share_with_user(user)

  end
end
