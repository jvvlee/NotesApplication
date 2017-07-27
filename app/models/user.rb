class User < ApplicationRecord
  validates :username, presence: true
  validates :password, presence: true
  has_secure_password

	has_many :notes, dependent: :destroy

  has_many :note_permissions, foreign_key: "user_id", class_name: "NotesUsers"
  has_many :shared_notes, through: :note_permissions, source: :note

  has_many :read_permissions, -> {where level: 1}, class_name: "NotesUsers"
  has_many :write_permissions, -> {where level: 2}, class_name: "NotesUsers"
  has_many :readable_notes, through: :read_permissions, source: :note
  has_many :writable_notes, through: :write_permissions, source: :note
end
