class NotesUsers < ActiveRecord::Base
  belongs_to :note
  belongs_to :user

  def as_json(options={}) # This allows the addition of a username for quick reference
  	super.as_json(options).merge({
  		:username => user.username,
      :title => note.title
  	})
  end
end