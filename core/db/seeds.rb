# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(
  [
    { email: "root@tendadogoblin.com", password: "abc123" }
  ]
)

ItemType.create(
  [
    { title: "Arma", permalink: 'weapon', short_description: "A weapon", long_description: "A weapon" },
  ]
)

DamageType.create(
  [
    { title: "Físico", permalink: 'fisico', short_description: "A weapon", long_description: "A weapon" },
  ]
)

Culture.create(
  [
    { title: "Filhos do Orvalho", permalink: 'filhos-do-orvalho', short_description: "Galera da floresta", long_description: "Galera da floresta" },
  ]
)

CharacterRole.create(
  [
    { title: "Carregador", permalink: 'carrier', short_description: "Porradeiro", long_description: "Porradeiro" },
  ]
)

Specie.create(
  [
    { title: "Goblin", permalink: 'goblin', short_description: "Goblin", long_description: "Goblin" },
  ]
)

ActionType.create(
  [
    { title: "Ativa", permalink: 'active', short_description: "ativa", long_description: "ativa" },
  ]
)

RangeType.create(
  [
    { title: "Alvo", permalink: 'target', short_description: "alvo", long_description: "alvo" },
  ]
)

Character.create(
  [
    { title: "Personagem", culture: Culture.first, user: User.first, character_role: CharacterRole.first, specie: Specie.first, short_description: "alvo", long_description: "alvo" },
  ]
)
