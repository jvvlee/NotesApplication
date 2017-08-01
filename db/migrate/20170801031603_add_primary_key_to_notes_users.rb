class AddPrimaryKeyToNotesUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :notes_users, :id, :primary_key
  end
end
