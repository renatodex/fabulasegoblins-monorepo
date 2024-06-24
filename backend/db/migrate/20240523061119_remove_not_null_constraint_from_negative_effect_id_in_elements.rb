class RemoveNotNullConstraintFromNegativeEffectIdInElements < ActiveRecord::Migration[7.0]
  def change
    change_column_null :elements, :negative_effect_id, true
  end
end
