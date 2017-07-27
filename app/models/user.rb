class User < ApplicationRecord
  validates :username, presence: true
  validates :password, presence: true
  has_secure_password

	has_many :notes, dependent: :destroy
	has_and_belongs_to_many :notes_shared, through: 

  has_many :note_permissions, foreign_key: "user_id", class_name: "NotesUsers"
  has_many :shared_notes, through: :note_permissions, source: :notes

  #https://stackoverflow.com/questions/408872/rails-has-many-through-find-by-extra-attributes-in-join-model
  has_many :readable_notes, through: :note_permissions, -> { where(note_users.level: 1) }, source: :notes
  has_many :writable_notes, through: :note_permissions, -> { where(note_users.level: 2) }, source: :notes

  # def readable_notes2
  #   note_permissions.where(level: 1).include(:notes)
  # end

  # def writable_notes
  #   note_permissions.where(level: 2).include(:notes)
  # end

end
