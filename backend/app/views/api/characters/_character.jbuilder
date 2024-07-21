json.title character.title

json.id character.id
json.background character.background
json.base_agility character.base_agility
json.base_destiny character.base_destiny
json.base_influence character.base_influence
json.base_intelect character.base_intelect
json.base_magic_elo character.base_magic_elo
json.base_resilience character.base_resilience
json.base_spirit character.base_spirit
json.base_strength character.base_strength
json.base_survival character.base_survival
json.code character.code
json.extra_hp_points character.extra_hp_points
json.extra_initiative character.extra_initiative
json.extra_magic_attack character.extra_magic_attack
json.extra_magic_defense character.extra_magic_defense
json.extra_main_attack character.extra_main_attack
json.extra_movement character.extra_movement
json.extra_mp_points character.extra_mp_points
json.extra_physical_attack character.extra_physical_attack
json.extra_physical_defense character.extra_physical_defense
json.extra_secondary_attack character.extra_secondary_attack
json.hp_points character.hp_points
json.initiative character.initiative
json.inventory_slots character.inventory_slots
json.level character.level
json.long_description character.long_description
json.magic_attack character.magic_attack
json.magic_defense character.magic_defense
json.main_attack character.main_attack
json.max_hp_points character.max_hp_points
json.max_mp_points character.max_mp_points
json.max_temirs character.max_temirs
json.movement character.movement
json.mp_points character.mp_points
json.physical_attack character.physical_attack
json.physical_defense character.physical_defense
json.secondary_attack character.secondary_attack
json.short_description character.short_description
json.temirs character.temirs
json.title character.title
json.traumas character.traumas
json.avatar character.avatar
json.created_at character.created_at
json.updated_at character.updated_at

json.character_role do
  json.partial! 'api/character_roles/character_role', resource: character.character_role
end
json.culture do
  json.partial! 'api/cultures/culture', resource: character.culture
end
json.specie do
  json.partial! 'api/species/specie', resource: character.specie
end
json.initial_grimo do
  json.partial! 'api/items/item', resource: character.initial_grimo
end
json.user_id character.user_id
