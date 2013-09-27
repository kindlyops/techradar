class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.json :pc
      t.string :movement
      t.integer :blipSize
      t.string :url
      t.timestamps
    end

    create_table :radars do |t|
      t.string :title
      t.string :h
      t.string :w
      t.timestamps
    end

    create_table :quadrants do |t|
      t.string :name
      t.string :left
      t.string :top
      t.string :color
      t.timestamps
      t.belongs_to :radar
    end

    create_table :quadrants_items do |t|
      t.belongs_to :quadrant
      t.belongs_to :item
    end

  end

end
