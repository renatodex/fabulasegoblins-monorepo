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

## Criando Tipos de Itens
[
  {title: "Armadura",	permalink: "armor", long_description: "Armaduras aumentam a sobrevivência do seu personagem, reduzindo a possibilidade de receber dano de inimigos no combate. Elas também podem te deixar mais lento."},
  {title: "Arma",	permalink: "weapon", long_description: "Armas são sua forma mais básica de ataque, cada classe costuma ter sua própria especialização, mas é possível se especializar em novos tipos armas com o passar do tempo."},
  {title: "Grimo",	permalink: "grimo", long_description: "Grimos são sua principal fonte de poder mágico, e é através dele que você aumenta seu vínculo com a magia enfraquecida das Terras Místicas"},
  {title: "Poção",	permalink: "potion", long_description: "Com diversas utilidades, poções podem ter efeitos benéficos e maléficos, portanto, pense bem antes de tomar a sua!"},
  {title: "Pergaminho",	permalink: "scroll", long_description: "Uma versão leve do processo de solidificação mágica dos Grimos. Os Pergaminhos podem conjurar poderes presos em suas fibras mágicas."},
  {title: "Suprimentos",	permalink: "supply", long_description: "Nada melhor do que estar sempre preparado, não é? Suprimentos são seu alicerce de sobrevivência em qualquer aventura."},
  {title: "Armazenamento",	permalink: "storage", long_description: "As masmorras possuem muitos tesouros, mas de nada adianta se não puder carregá-los. Os itens de Armazenamento aqui serão seus melhores aliados!"},
  {title: "Ferramentas",	permalink: "tool", long_description: "Ferramentas são o canivete suiço de todo aventureiro, seja parar quebrar, emendar ou separar, é sempre bom contar estes amiguinhos metálicos."},
  {title: "Especial",	permalink: "special", long_description: "Os Itens especiais geralmente não podem ser equipados ou carregados. São apenas Itens de Interação que podem desencadear Bençãos ou Maldições"}
].each do |item_type|
  ItemType.create!(item_type.merge({short_description: item_type[:long_description]}))
end

## Criando Tipos de Dano
[
  { title: "Físico", permalink: 'physical', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
  { title: "Mágico", permalink: 'magic', long_description: "O dano mágico é aquele que é realizado por poderes, Grimos, armas ou artefatos que possuem essência mágica, sendo capazes de causar dano elemental, não-elemental, ou até realizar proezas extraordinárias que não seriam possíveis pelos meios comuns." },
].each do |damage_type|
  DamageType.create!(damage_type.merge({short_description: damage_type[:long_description]}))
end

# Criando Culturas
[
  { permalink: "filhos-das-areias", title: "Filhos das Areias", short_description: "Os Filhos do Deserto representam os povos que habitam as terras áridas e quentes. Suas cidades são verdadeiros Oasis em meio a imensidão de areia e pedra, e sua cultura é marcada pela sobrevivência e pela força.", key_values: "Resiliência, Força, Sobrevivência", clothes_description: "Túnicas Leves, Trajes acolchoados, e Fibra de Cacto", common_divinities: "Moltron, Valamir, Valeon", bonuses: "Resiliência +1, Sobrevivência +1, Força +1, P.V +4"},
  { permalink: "filhos-de-caldera", title: "Filhos da Caldera", short_description: "Acostumados a passar meses velejando no extenso e inexplorado mar de Caldera, esses Aventureiros estão desacostumados com a comodidade da Terra. Reinos portuários como Tol'Deran, Nuvenar e Celendor são com certeza a única porção de terra que eles podem considerar como um \"Porto Seguro\", e até, talvez, chamar de lar.", key_values: "Exploração, Adaptação, Disciplina", clothes_description: "Trajes Leves e Quentes, Tecidos a base de Algodão e Couro especiais para baixas temperaturas", common_divinities: "Ehphyros, Valis, Estiros", bonuses: "Agilidade +1, Influência +1, Resiliência +1, Iniciativa +2"},
  { permalink: "filhos-de-arcadia", title: "Filhos de Arcádia", short_description: "Tudo é diferente no mundo acima das Núvens. E nas Terras Místicas, não é só a vida selvagem que conseguiu se adaptar nas altas altitudes. Parar viver neste mundo, você não precisa necessariamente ter nascido como uma criatura alada, assim como os Razalans e os Luminins, pois qualquer um, até mesmo Goblins podem se aventurar nas alturas do continente flutuante Arcádia.", key_values: "Estudo, Conhecimento, Inovação", clothes_description: "Túnicas chamativas com Algodão Oxidado, Trajes de Frio com muitas camadas", common_divinities: "Zaravos, Ysanar, Qabalis", bonuses: "Intelecto +1, Elo Mágico +1, Destino +1, P.M +3"},
  { permalink: "filhos-das-ilhas", title: "Filhos das Ilhas", short_description: "Os Nativos, ou Filhos das Ilhas, são um grupo seleto de pessoas que habitam as Ilhas dos Arquipélagos Terrestres das Terras Místicas. Essas Ilhas são ambientes de terra virgem que são guardados e protegidos por tribos Nativas ancestrais.", key_values: "Espiritismo, Misticismo, Conexão", clothes_description: "Trajes tribais, Mantos rúnicos e muitos adereços", common_divinities: "Ogoron, Herodus, Dinímia", bonuses: "Espírito +1, Elo Mágico +1,Sobrevivência +1, P.M +4"},
  { permalink: "filhos-do-subterraneo", title: "Filhos do Subterrâneo", short_description: "Os Filhos do Subterrâneo vivem em comunidades organizadas em territórios subterrâneos, como extensas cavernas e grutas remotas. Esse povo aprendeu a viver mesmo com os perigos da escuridão e a proximidade das criaturas do subterrâneo.", key_values: "Proteção, Forja, União", clothes_description: "Trajes metálicos e de couro com muitas camadas", common_divinities: "Herodus, Xenosh, Icaron", bonuses: "P.V +5, Pontos de Defesa +1, Pontos de Ataque +1, Resiliência +1"},
  { permalink: "filhos-da-tempestade", title: "Filhos da Tempestade", short_description: "Os Filhos da Tempestade são uma Seita muito antiga nas Terras Místicas que acredita no poder da alta fé para salvar o mundo da escuridão. Essa organização é tão poderosa que possui Reinos inteiros dedicados à adoração de sua doutrina.", key_values: "Doutrina, Religião, Ordem", clothes_description: "Túnicas elegantes, capuzes e adereços religiosos", common_divinities: "Quaemanir, Dzeranir, Ysanar", bonuses: "Destino +1, Influência +1, Espírito +1"},
  { permalink: "filhos-do-povo-livre", title: "Filhos do Povo Livre", short_description: "Imensos acampamentos itinerantes se extendem por kilômetros nas grandes Planícies Mediterrâneas das Terras Místicas. Esses reinos móveis foram originalmente fundados por Nativos que moravam nas Ilhas externas ao continente, que acabaram migrando para os Reinos Mediterrâneos, mas não conseguiram se adaptar na vida nas cidades.", key_values: "Agricultura, Comércio, Fronteiras", clothes_description: "Trajes típico de viajantes, com muitas aberturas e bolsos", common_divinities: "Somonir, Joromur, Aypheria", bonuses: "Influência +1, Agilidade +1, Pontos de Ataque +1"},
  { permalink: "filhos-de-eregor", title: "Filhos de Eregor", short_description: "O Povo Eregor é representado pelos aglomerados de reinos e cidades que populam grandes conjuntos de montanhas e desfiladeiros. Acostumados com a arte de forja e magia, esses reinos prosperaram devido a sua localização privilegiada, tornando-se locais propícios para aqueles que buscam aprender tecnologia.", key_values: "Ceticismo, Tecnologia, Forja", clothes_description: "Roupas ornamentadas, túnicas banhadas em ouro e pequenas jóias como adereços", common_divinities: "Moltron, Razandibu e Beremord", bonuses: "Força +1, Influência + 1, Resiliência +1"},
  { permalink: "filhos-de-timeria", title: "Filhos de Timéria", short_description: "Como um Filho de Timéria, você nasceu e viveu por um longo tempo nas Terras do Oceano de Timéria, seja em um pequeno vilarejo, ou em uma das grandes cidades submersas como Baion, Cardumia ou Pomedon.", key_values: "Mistério, Equilíbrio, Respeito", clothes_description: "Couro aquático, Exo-Esqueletos, Túnicas de Lã de Algas", common_divinities: "Koroma, Lazan, Gaeria", bonuses: "Elo Mágico +1, Espírito +1, Força +1"},
].each do |culture|
  Culture.create!(culture.merge({long_description: culture[:short_description]}))

end

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

[
  { title: "Força", permalink: "strength", long_description: "Representa a sua Força, e é usado para definir seus Pontos de Vida e sua capacidade de carregamento de itens."},
  { title: "Resiliência", permalink: "resilience", long_description: "Define sua resistência a atributos negativos e Traumas."},
  { title: "Agilidade", permalink: "agility", long_description: "Define sua agilidade e melhora sua movimentação. Também é usada para definir sua habilidade com armas de projéteis."},
  { title: "Elo Mágico", permalink: "magic_elo", long_description: "Representa o \"quão mágico\" você é para o mundo. Usado para definir seus Pontos de Magia."},
  { title: "Espírito", permalink: "spirit", long_description: "Representa sua Mediunidade, Define sua Defesa Mágica geral, e é usado para definir sua habilidade com armas espirituais ."},
  { title: "Intelecto", permalink: "intelect", long_description: "Define seu Grau de Erudição e permite destravar vínculos adicionais com Grimos."},
  { title: "Destino", permalink: "destiny", long_description: "Define o quão Destinado você é, usado em Ações de Perícia."},
  { title: "Sobrevivência", permalink: "survival", long_description: "Define sua capacidade de sobreviver em situações difíceis. Define sua capacidade de se adaptar à condições climáticas, encontrar coisas e improvisar."},
  { title: "Influência", permalink: "influence", long_description: "Define sua eloquência e poder de influência sobre as pessoas. Melhora os preços em Mercadores, e também é usado para Diplomacia e Manipulação."},
].each do |sheet_attribute|
  SheetAttribute.create!(sheet_attribute.merge({short_description: sheet_attribute[:long_description]}))
end

grimo = Item.create!(
  title: 'Grimo de Allura',
  permalink: "grimo-de-allura",
  short_description: 'Grimo de Allura',
  long_description: 'Grimo de Allura',
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
      short_description: "Personagem teste",
      long_description: "Personagem teste",
    },
  ]
)

CharacterItem.create!(
  item: grimo,
  character: Character.first,
  notes: "Elemento Fogo - Fraqueza Agua - Efeito Queimar",
  property: "fire",
)