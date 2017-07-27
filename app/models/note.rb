class Note < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_many :permissions, foreign_key: "note_id", class_name: "NotesUsers"
  has_many :users, through: :permissions

  accepts_nested_attributes_for :permissions

  def initialize()
  end

  def share_with_user(user, level)
  end

  
end
