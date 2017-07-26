class User < ApplicationRecord
	attr_accessor :password

	has_many :notes, dependent: :destroy

	has_and_belongs_to_many :notes_shared, class_name: 'Note'

	def initialize()
	end
end
