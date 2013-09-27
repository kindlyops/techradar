class CreateArcs < ActiveRecord::Migration
  def change
    create_table :arcs do |t|
      t.string :name
      t.integer :r
    end
  end
end
