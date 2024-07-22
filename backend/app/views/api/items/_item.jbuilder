json.id resource.id

# json.bonus_magic_attack resource.bonus_magic_attack
# json.bonus_magical_defense resource.bonus_magical_defense
# json.bonus_physical_attack resource.bonus_physical_attack
# json.bonus_physical_defense resource.bonus_physical_defense
# json.buy_price resource.buy_price
# json.book_url resource.book_url
# json.sell_price resource.sell_price
# json.slots_used resource.slots_used

json.durability resource.durability
json.formula resource.formula
json.long_description resource.long_description
json.icon resource.icon
json.permalink resource.permalink
json.short_description resource.short_description
json.micro_description resource.micro_description
json.color resource.color
json.title resource.title
json.damage_type resource.damage_type&.title
json.item_type resource.item_type&.title
json.sheet_attribute resource.sheet_attribute&.title
json.sheet_attribute_icon resource.sheet_attribute&.icon
json.ranged resource.ranged
json.targets resource.targets

if resource.grimo
  json.starter_weapons(resource.grimo.items) do |starter_item|
    json.partial! 'api/items/item', resource: starter_item
  end
end

json.proficiencies(resource.proficiencies) do |proficiency|
  json.partial! 'api/proficiencies/proficiency', proficiency: proficiency
end
