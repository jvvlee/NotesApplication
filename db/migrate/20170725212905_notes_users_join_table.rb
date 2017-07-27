class NotesUsersJoinTable < ActiveRecord::Migration[5.1]
  def change
  	create_join_table :users, :notes do |t|
      t.index :user_id
      t.index :notes_id
    end
  end
end
