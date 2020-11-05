class ChangeBooksTitleToString < ActiveRecord::Migration[6.0]
  def change
    change_table :books do |t|
      t.change :title, :text
    end
  end
end
