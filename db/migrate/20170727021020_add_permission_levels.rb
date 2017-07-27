class AddPermissionLevels < ActiveRecord::Migration[5.1]
  def change
    add_column :notes_users ,:level, :int
  end
end
