class User < ApplicationRecord
  validates :username, presence: true
  validates :password, presence: true
  has_secure_password

	has_many :notes, dependent: :destroy
	has_and_belongs_to_many :notes_shared, class_name: 'Note'

end
