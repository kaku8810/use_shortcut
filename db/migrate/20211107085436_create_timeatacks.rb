class CreateTimeatacks < ActiveRecord::Migration[5.1]
  def change
    create_table :timeatacks do |t|
      t.integer :time
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
