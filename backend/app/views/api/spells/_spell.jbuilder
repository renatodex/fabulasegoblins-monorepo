json.id resource.id
json.book_url resource.book_url
json.cast_distance resource.cast_distance
json.cast_distance_number resource.cast_distance_number
json.duration_time resource.duration_time
json.duration_time_number resource.duration_time_number
json.icon resource.icon
json.long_description resource.long_description
json.magic_cost resource.magic_cost
json.magic_cost_number resource.magic_cost_number
json.permalink resource.permalink
json.range_amount resource.range_amount
json.sacrifice resource.sacrifice
json.short_description resource.short_description
json.micro_description resource.micro_description
json.tags resource.tags
json.filter_tags resource.filter_tags
json.tier resource.tier
json.title resource.title
json.ultimate resource.ultimate
json.created_at resource.created_at
json.updated_at resource.updated_at
json.action_type_id resource.action_type_id
json.attack_logic_id resource.attack_logic_id
json.element_id resource.element_id
json.external_id resource.external_id

spell_owners = resource.spell_owners

# json.cultures resource.spell_owners.select { |so| so.spell_owner_type == 'Culture' }.map(&:spell_owner)
# json.grimos resource.spell_owners.select { |so| so.spell_owner_type == 'Item' }.map(&:spell_owner)
# json.species resource.spell_owners.select { |so| so.spell_owner_type == 'Specie' }.map(&:spell_owner)
# json.character_roles resource.spell_owners.select { |so| so.spell_owner_type == 'CharacterRole' }.map(&:spell_owner)

json.range_type do
  json.id resource.range_type.id
  json.title resource.range_type.title
  json.short_description resource.range_type.short_description
  json.long_description resource.range_type.long_description
  json.permalink resource.range_type.permalink
end
