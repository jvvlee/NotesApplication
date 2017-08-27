class NotesUsers < ActiveRecord::Base
  belongs_to :note
  belongs_to :user

  validate :not_owner

  def not_owner
    if user.id == note.owner.id
      errors.add(:user_id, "cannot grant permissions to yourself.")
    end
  end

  def as_json(options={}) # This allows the addition of a username for quick reference
  	super.as_json(options).merge({
  		:username => user.username,
      :title => note.title
  	})
  end
end