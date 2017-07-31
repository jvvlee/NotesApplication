class NotesUsers < ActiveRecord::Base
  belongs_to :note
  belongs_to :user

  def username
  	user.username
  end

  def as_json(options={}) # This allows the addition of a username for quick reference
  	super.as_json(options).merge({
  		:username => username
  	})
  end
end