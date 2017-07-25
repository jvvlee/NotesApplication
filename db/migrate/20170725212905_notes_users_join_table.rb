class NotesUsersJoinTable < ActiveRecord::Migration[5.1]
  def change
  	create_join_table :users, :notes
  end
end
