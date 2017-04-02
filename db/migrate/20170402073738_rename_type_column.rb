class RenameTypeColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :favorites, :type, :media_type
  end
end
