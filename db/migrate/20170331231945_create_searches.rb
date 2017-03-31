class CreateSearches < ActiveRecord::Migration[5.0]
  def change
    create_table :searches do |t|
      t.string :query, null: false
      t.integer :user_id, index: true

      t.timestamps
    end
  end
end
