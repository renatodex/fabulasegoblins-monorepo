# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(
  [
    {
      email: "teste@tendadogoblin.com",
      password: "test123",
      password_confirmation: "test123"
    }
  ]
)

ItemType.create!(
  [
    {
      title: "Grimo",
      permalink: 'grimo',
      short_description: "Grimo",
      long_description: "Grimo"
    },
  ]
)

DamageType.create!(
  [
    {
      title: "Físico",
      permalink: 'fisico',
      short_description: "A weapon",
      long_description: "A weapon"
    },
  ]
)

Culture.create!(
  [
    {
      title: "Filhos do Orvalho",
      permalink: 'filhos-do-orvalho',
      short_description: "Galera da floresta",
      long_description: "Galera da floresta"
    },
  ]
)

CharacterRole.create!(
  [
    {
      title: "Carregador",
      permalink: 'carrier',
      short_description: "Porradeiro",
      long_description: "Porradeiro"
    },
  ]
)

Specie.create!(
  [
    {
      title: "Goblin",
      permalink: 'goblin',
      short_description: "Goblin",
      long_description: "Goblin"
    },
  ]
)

# Not used yet
ActionType.create!(
  [
    {
      title: "Ativa",
      permalink: 'active',
      short_description: "ativa",
      long_description: "ativa"
    },
  ]
)

# Not used yet
RangeType.create!(
  [
    {
      title: "Alvo",
      permalink: 'target',
      short_description: "alvo",
      long_description: "alvo"
    },
  ]
)

SheetAttribute.create!(
  title: "Força",
  permalink: "strength",
  short_description: "Força",
  long_description: "Força",
)

grimo = Item.create!(
  title: 'Grimo de Ravna',
  permalink: "grimo-de-ravna",
  short_description: 'Grimo de Ravna',
  long_description: 'Grimo de Ravna',
  damage_type: DamageType.first,
  item_type: ItemType.first,
  sheet_attribute: SheetAttribute.first,
)

Character.create!(
  [
    {
      title: "Personagem Teste",
      culture: Culture.first,
      user: User.first,
      character_role: CharacterRole.first,
      specie: Specie.first,
      short_description: "alvo",
      long_description: "alvo",
      items: [
        grimo,
      ]
    },
  ]
)