class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false, index: true
      t.string :imdb_id, null: false
      t.string :title, null: false
      t.string :year
      t.string :type
      t.string :poster

      t.timestamps
    end

    add_index :favorites, [:user_id, :imdb_id], unique: true
  end
end
