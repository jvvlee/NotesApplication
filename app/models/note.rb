class Note < ApplicationRecord
  validates :title, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_many :permissions, foreign_key: "note_id", class_name: "NotesUsers"
  has_many :read_permissions, -> {where level: 1}, class_name: "NotesUsers"
  has_many :write_permissions, -> {where level: 2}, class_name: "NotesUsers"

  has_many :readable_notes, through: :read_permissions, source: :user
  has_many :writable_notes, through: :write_permissions, source: :user

  has_many :users, through: :permissions

  accepts_nested_attributes_for :permissions

  def share_with_user(user, level)
  	permissions.create({user_id: user.id, level: level})
  end

  
end
