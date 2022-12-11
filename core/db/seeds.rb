# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

## Criando usuário de teste
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

# Criando Papéis de Personagem
[
  { title: "Carregador", permalink: "carrier", base_hp: 14, base_mp: 12, base_movement: 5, weapon_proficience: "Força ou Agilidade", hp_per_level: [4, 4, 8, 8], mp_per_level: [2,4,4,6],  short_description: "Você prioriza o combate próximo e está disposto a receber dano se isso significar causar mais dano." },
  { title: "Atirador", permalink: "shooter", base_hp: 14, base_mp: 12, base_movement: 5, weapon_proficience: "Agilidade ou Sobrevivência", hp_per_level: [3,3,6,6], mp_per_level: [3,3,6,6],  short_description: "Você prioriza o combate a distância e prefere não receber dano e ainda sim causar muito dano." },
  { title: "Tanque", permalink: "tank", base_hp: 18, base_mp: 12, base_movement: 4, weapon_proficience: "Força ou Resiliência", hp_per_level: [5,5,10,10], mp_per_level: [2,4,4,6],  short_description: "Você é uma parede de tijolos, e se os inimigos querem chegar em seus aliados, terão de passar por você." },
  { title: "Suporte", permalink: "support", base_hp: 12, base_mp: 18, base_movement: 3, weapon_proficience: "Intelecto, Elo Mágico ou Espírito", hp_per_level: [2,4,4,6], mp_per_level: [5,5,10,10],  short_description: "Sua especialidade é auxiliar seus aliados, conjurando auras e benefícios cruciais para mantê-los vivos." },
  { title: "Conjurador", permalink: "caster", base_hp: 12, base_mp: 14, base_movement: 4, weapon_proficience: "Intelecto, Elo Mágico ou Espírito", hp_per_level: [2,4,4,6], mp_per_level: [4,4,8,8],  short_description: "Você prefere manter distância de seus inimigos, utilizando feitiços mágicos para causar muito dano." },
  { title: "Utilitário", permalink: "utilitary", base_hp: 14, base_mp: 14, base_movement: 4, weapon_proficience: "Qualquer uma", hp_per_level: [3,3,6,6], mp_per_level: [3,3,6,6],  short_description: "O seu estilo é misto, e prefere uma abordagem mais equilibrada que varie combate a distância e corpo a corpo." },
].each do |character_role|
  CharacterRole.create!(character_role.merge({long_description: character_role[:short_description]}))
end

# Criando Espécies
[
  { title: "Goblins", permalink: "Goblins", playable: true, extra_attribute_points: 2, short_description: "Os Goblins são a raça mais dominante no mundo das Terras Místicas. Alegres e trabalhadores, os Goblins ergueram verdadeiros impérios com sua perseverança e trabalho árduo. Nos dias de hoje, eles sofrem com os impactos do Blecaute, e lutam diariamente para que possam reconquistar tudo que foi perdido." },
  { title: "Armadons", permalink: "Armadons", playable: true, extra_attribute_points: 0, short_description: "Os Armadons são uma raça pangoliana exclusiva de climas quentes e seco. São biologicamente capazes sobreviver por longos períodos abaixo da terra, sem luz solar e até sem água corrente. Os Armadons são conhecidos como verdadeiros engenheiros, construíndo cidades em locais onde não se imaginava ser possível suportar vida." },
  { title: "Metalóides", permalink: "Metalóides", playable: true, extra_attribute_points: 0, short_description: "Criados caóticamente a partir da magia bruta, Metalóides são seres mágicos, possuindo bolsões corporais por onde passa um flúido metálico derivado da magia. Capazes de manipular a magia para criar itens mágicos a partir de materiais brutos, Metalóides são conhecidos por suas sociedades fechadas e místicas." },
  { title: "Razalans", permalink: "Razalans", playable: true, extra_attribute_points: 0, short_description: "Espécie com características Reptilianas e Aviárias, os Razalans são conhecidos por construírem seus reinos isolados em ilhas flutuantes. Tradicionalmente eram conhecidos como agricultores de magia no passado, até que o Blecaute tornou seus campos inférteis, e precisaram formar alianças mais fortes com os outros reinos terrestres. Apesar de possuírem asas, não são capazes de voar, mas podem planar e flutuar a baixas altitudes." },
  { title: "Valdaris", permalink: "Valdaris", playable: true, extra_attribute_points: 0, short_description: "Os Valdaris são uma espécie de Anfíbios que dominam primariamente os extensos rios e oceanos de Galantia. Fisicamente eles se desenvolveram para se adaptar a viverem submersos, possuindo a capacidade de respirar normalmente tanto dentro quanto fora d'agua." },
  { title: "Luminins", permalink: "Luminins", playable: true, extra_attribute_points: 0, short_description: "Os Luminins são pequenas criaturas humanóides que possuem alto grau de sensciencia e uma sociedade organizada. Um indivíduo adulto pode chegar a uma média de 1,30m, sendo consideravelmente pequeno até mesmo comparados com raças anatomicamente menores como Armadons. Seus corpos possuem uma bioluminescência natural, emitindo um brilho de tonalidade púrpura, que se extende por seu corpo todo, dos pés a cabeça. Diferente do que se costuma deduzir, os Luminins não são criaturas de constituição mágica, pois seu brilho característico vêm de característica química de seus corpos, não possuindo qualquer vestigio de magia em sua emissão de luz." },
].each do |specie|
  Specie.create!(specie.merge({long_description: specie[:short_description]}))
end

# Criando Tipos de Ação (não usado ainda)
[
  { title: "Ativa", permalink: 'active', short_description: "Ações ativas custam uma ação para ser utilizada. Em um combate, um personagem pode realizar uma Ação Maior, uma Menor, e muitas Ações Livres, mas todos esses sub-tipos estão contemplados dentro da Ação Ativa." },
  { title: "Passiva", permalink: 'passive', short_description: "Ações passivas não só não custam uma ação menor ou maior para serem realizadas, como também estão ativas o tempo todo, sem que uma ativação explicita seja necessária." },
  { title: "Reação", permalink: 'reaction', short_description: "Diferente das Ações Ativas, as Ações de Reação podem ser utilizadas em resposta a um determinado evento especificado. Geralmente inimigos do tipo Nêmesis possuem muitas Ações de Reação." },
].each do |action_type|
  ActionType.create!(action_type.merge({long_description: action_type[:short_description]}))
end

# Criando Tipos de Alcance
[
  { title:"Alvo", permalink: "target", short_description: "Essa magia tem como foco específico um alvo, ela é travada no alvo de forma que, mesmo que o alvo se mova, ela irá acertá-lo." },
  { title:"Ponto", permalink: "point", short_description: "Essa magia foca em um quadrado específico do mapa. Caso o alvo se mova desse quadrado, a magia erra o alvo." },
  { title:"Área", permalink: "area", short_description: "O conjurador lança a magia em uma área de N quadrados iniciando a partir do centro do quadrado escolhido." },
  { title:"Cone", permalink: "cone", short_description: "A magia é lançada a partir de um cone do próprio alvo." },
  { title:"Circular", permalink: "circular", short_description: "O conjurador casta o feitiço a partir dele mesmo e afeta todas as unidades num angulo de 360o a partir dele." },
  { title:"Nenhum", permalink: "none", short_description: "Talvez esta magia não tenha nenhum alvo específico, ou afete todo o campo de batalha. " },
  { title:"Corpo-a-Corpo", permalink: "melee", short_description: "Essa magia apenas funciona através de uma interação corpo-a-corpo." },
  { title:"Pode Variar", permalink: "may_vary", short_description: "Essa magia possui sua própria complexidade, e pode resultar em tipos variados de range, dependendo de como for usada." },
  { title:"Sí mesmo", permalink: "self", short_description: "O conjurador casta a habilidade contra ele mesmo." },
  { title:"Multiplos Alvos", permalink: "targets", short_description: "O conjurador casta a habilidade contra múltiplos alvos." },
  { title:"Linha", permalink: "line", short_description: "A magia é lançada em uma linha reta." },
  { title:"Area Poligonal", permalink: "polygon_area", short_description: "Essa magia tem uma área de efeito customizada, podendo variar bastante." },
].each do |range_type|
  RangeType.create!(range_type.merge({long_description: range_type[:short_description]}))
end

# Criando Atributos da Ficha
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

# Criando Grimos
[
  { title: "Brasão de Giurad", short_description: "O s Guerreiros de Giurad são treinados para se tornarem cavaleiros da justiça nas Academias de combate. Lá, eles aprendem a manipular a Espada e o Escudo, utilizando poderosas habilidades estratégicas para beneficiar seus aliados enquanto causam dano em seus inimigos. Todo Cavaleiro faz um juramento de lealdade a um Tutor, figura sábia e respeitada cujo papel é orientá-lo em sua jornada.", permalink: "brasao-de-giurad", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Jóia de Lunn", short_description: "A Jóia de Lunn é o Grimo dos Sacerdotes da Igreja de Lunn. (também conhecido como Luniísmo). Seus Adeptos aprendem a arte da Cura e do Suporte em sua forma mais pura, e são vistos como os Pilares que combatem o crescimento do mal. A palavra de Lunn é venerada em diversos cantos do mundo, e seus Sacerdotes são caracterízados pelo porte do Cajado e da Cruz de Lunn.", permalink: "joia-de-lunn", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Orbe de Allura", short_description: "A Orbe de Allura é um Grimo elemental, que ao ser vinculado, pode adquirir qualquer um dos 12 Aspectos Elementais do mundo. Os Adeptos de Allura se tornam Arcanistas elementais que canalizam seu poder à partir do Grimo podendo conjurar poderosos feitiços ofensivos e defensivos. Os Adeptos de Allura também aprendem a utilizar o Cetro e a Orbe para canalizar o poder dos Elementos.", permalink: "orbe-de-allura", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Olho de Kanus", short_description: "A Guilda de Kanus é conhecida por formar exímios sobreviventes letrados na arte da Caça. Os Adeptos de Kanus são mestres na arte de rastrear e abater criaturas selvagens, e para isso, utilizam seu domínio da arte do Arco e Flecha e da Adaga. Os Caçadores tem uma relação próxima com a Guilda, que oferece recompensas por contratos de caça de criaturas aos seus membros.", permalink: "olho-de-kanus", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Arca de Ravna", short_description: "Os Adeptos de Ravna acreditam que a forma mais pura de manipular a Magia seja através de seus portadores originais, as Criaturas Selvagens. A variedade de conhecimentos desse Grimo faz com que os Adeptos de Ravna sejam excelente utilitários. Além de conjurar a poderosa magia selvagem das Criaturas, os adeptos aprendem a combater seus inimigos com Garras e Estilingues mágicos, que atingem seus inimigos a uma enorme distância.", permalink: "arca-de-ravna", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Tótem de Darian", short_description: "Os Adeptos de Darian são Xamãs espirituais. O Tótem é conhecido como o Grimo dos Espíritos, e seus Adeptos aprendem a se comunicar com o plano Astral para conjurar magias e rituais poderosos. Cada Adepto de Darian é treinado com a ajuda de um Mentor, escolhido no início de sua jornada. O Mentor ensina o Dariano a navegar pelo perigoso Plano Astral, utilizando para isso o poder residual dos Gravetos e Tábuas Mágicas.", permalink: "totem-de-darian", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Aparato de Magni", short_description: "Os Adeptos de Magni originais acreditavam que a Magia se corrompe sempre que é manipulada diretamente contra seus inimigos. Ao invés disso, eles desenvolveram Magnis, construtos inanimados controlados magicamente por seu portador através de Tecmagi, um tipo de Tecnologia aliada à Magia. Treinados no combate utilitário, esses Tecmagos podem utilizar Bombas e Garruchas como armas principais.", permalink: "aparato-de-magni", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Frasco de Valari", short_description: "Os Adeptos de Valari são conhecidos como Guerreiros das Trevas, manipulando as próprias Sombras para mascarar sua presença, enquanto embanham suas armas com venenos mortais, derrotando seus inimigos com ataques rápidos e precisos. Muitas vezes interpretados como assassinos, os destemidos Valari são treinados para manipular a Katar e os infames Dardos Venenosos.", permalink: "frasco-de-valari", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Insígnia de Qatun", short_description: "Ilusão é a única palavra que pode definir um  Adepto de Qatun.Esses curiosos Feiticeiros são treinados na arte de manipular a mente e a matéria, criando ilusões convincentes que podem confundir seus inimigos. Além de Mestres do Ilusionismo e dominadores da Magia do Caos, esses elegantes Fortunos são treinados para combater com Bengalas e Espadas portáteis conhecidas como Saxos.", permalink: "insignia-de-qatun", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Selo de Ixin", short_description: "Os Guerreiros de Ixin manipulam a Energia Rúnica, cuja origem ainda é um enigma para a civilização moderna. Para isso, os Adeptos utilizam as 3 Runas Templárias, Urt, Xah e Rah, e podem materializar Feixes de Luzes poderosos, Linhas Etéreas e uma série de poderes Ofensivos e utilitários. Os Guerreiros de Ixin são treinados no combate ágil, e podem combater com Manoplas rúnicas e Bastões.", permalink: "selo-de-ixin", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
].each do |grimo|
  Grimo.create!(grimo.merge({long_description: grimo[:short_description]}))
end

# Criar Condições Negativas
[
  { permalink: "poison", title: "Envenenar (D)/(T)", short_description: "Aflige o alvo com uma substância venenosa, que causa Dano fixo por turno (D) durante (T) turnos." },
  { permalink: "burn", title: "Queimar (D)/(T)", short_description: "Causa (D) de dano elemental de fogo continuo por turno, cuja duração é de (T) turnos. Enquanto estiver queimando, personagens não podem atacar alvos ou realizar ações que exigem concentração a menos que sejam bem sucedidos em um teste de Resiliência com Desvantagem." },
  { permalink: "control", title: "Controlar (C)", short_description: "O personagem passa a ser controlado magicamente, não podendo realizar ações de acordo com a sua vontade em seu turno. A condição dura indefinidamente, e exige que o personagem realize um teste de Resiliência com desvantagem contra a Dificuldade (C) para quebrar o controle. Ao ser bem sucedido, o turno do personagem finaliza imediatamente." },
  { permalink: "constrict", title: "Constrição (C)/(T)", short_description: "A constrição é um estado físico ou mágico que prende um alvo, impedindo que ele possa atacar, se defender ou se mover. Testes de ataque e defesa falham automaticamente. O efeito dura por (T) turnos, mas so personagem pode realizar um teste de Força ou Resiliência contra a Dificuldade (C) para quebrar a condição. Ao ser bem sucedido, seu turno se encerra imediatamente." },
  { permalink: "corrode", title: "Corroer (N)/(D)", short_description: "Enquanto o Veneno aflige o alvo por dentro, a Corrosão aflige fisicamente, danificando (N) cargas de Armas ou Armaduras, a ser definido pelo próprio jogador, além de causar (D) de dano fixo. Este efeito não é continuo, e se resolve imediatamente." },
  { permalink: "exhaust", title: "Exaurir (P)", short_description: "A exaustão é um efeito que aplica (-P) de penalidade em qualquer ação." },
  { permalink: "terror", title: "Terror (M)/(P)", short_description: "O Terror é uma aura psicológica. Personagens afetados por Terror recebem (-P) de Penalidade se estiverem a até (M) quadrados do alvo que causou o terror. O efeito só acaba quando o combate acabar ou quando a fonte do Terror desaparecer." },
  { permalink: "freeze", title: "Congelar (M)/(T)", short_description: "Aflige o alvo com um congelamento súbito, que reduz seu movimento em (M) quadrados durante (T) turnos." },
  { permalink: "push", title: "Empurrar (M)", short_description: "Empurrar causa um movimento forçado de (M) quadrados em uma determinada direção (geralmente oposta). Sempre que um personagem for empurrado contra um obstáculo físico, ele receberá TIER*d4 de dano para cada quadrado realizado contra o obstáculo." },
  { permalink: "paralize", title: "Paralizar (T)", short_description: "Personagens atordoados não podem falar e nem se mover por (T) turnos, podendo apenas realizar ataques em alvos no seu alcance." },
  { permalink: "haziness", title: "Imprecisão (T)", short_description: "Ataques a distância recebem desvantagem para serem executados durante (T) turnos. Isso inclui conjuração mágica a distância não-teleguiada." },
  { permalink: "silence", title: "Silenciar (T)", short_description: "Infringe um bloqueio mágico que impede o usuário de conjurar feitiços e pergaminhos por (T) turnos." },
  { permalink: "slow", title: "Lentidão (T)", short_description: "Personagens só podem realizar uma única ação e um ataque por turno, mesmo que algo especifique que você pode realizar 2 ataques. Além disso, só podem se mover com metade do seu movimento arredondado para baixo e recebem desvantagem em testes de Ataque. Poderes que exigem canalização levam o dobro do tempo para serem executados. A Lentidão dura (T) turnos." },
  { permalink: "stun", title: "Atordoar (T)", short_description: "Personagens atordoados não podem realizar ações durante (T) turnos." },
  { permalink: "blind", title: "Cegueira (T)", short_description: "Alvos cegos falham automaticamente em testes que exigem visão, como ataques à distância e ações de precisão. Ações de Ataque e Defesa também são realizadas com desvantagem. A Cegueira dura (T) turnos." },
  { permalink: "petrify", title: "Petrificar (T)", short_description: "Personagens petrificados não podem realizar nenhum tipo de ação por (T) turnos e não possuem qualquer noção sensorial sobre os seus arredores. Atacar um personagem petrificado causa dano diretamente em seus P.V. Qualquer condição que esteja afetando o personagem antes da petrificação é temporariamente suspensa, até que ele retorne ao estado normal." },
  { permalink: "sleep", title: "Adormecer (T)", short_description: "O personagem cai no chão e fica subitamente inconsciente por (T) turnos, até que seja atacado ou acordado. Enquanto estiver inconsciente, ele falha automaticamente em testes de Defesa." },
  { permalink: "purge", title: "Expurgar", short_description: "O Expurgo elimina instantaneamente criaturas Decrépitas como Mortos-Vivos, Fantasmas, Aparições, Maldições e Demônios. Não funciona contra inimigos líderes ou superior." },
  { permalink: "knock", title: "Derrubar", short_description: "O alvo cai no chão, e precisa se levantar se quiser se mover. Alvos no chão recebem desvantagem em testes de Defesa." },
].each do |negative_effect|
  NegativeEffect.create!(negative_effect.merge({long_description: negative_effect[:short_description]}))
end

# Criar Elementos
elements = [
  {title: "Água", permalink: "water",	short_description: "Controla o Líquido essêncial à vida, bem como Oceanos e Rios.", weak_to_proc: lambda { Element.thunder }, resistant_to_proc: lambda { Element.fire }, negative_effect: NegativeEffect.haziness },
  {title: "Ácido", permalink: "acid",	short_description: "Controla os elementos Tóxicos e Ácidos com alto poder de corrosão.", weak_to_proc: lambda { Element.wind }, resistant_to_proc: lambda { Element.nature }, negative_effect: NegativeEffect.corrode },
  {title: "Arcano", permalink: "arcane",	short_description: "Controla a Mágia das Estrelas e a essência do Magiverso.", weak_to_proc: lambda { Element.chaos }, resistant_to_proc: lambda { Element.chaos }, negative_effect: NegativeEffect.silence },
  {title: "Caos", permalink: "chaos",	short_description: "Controla a instabilidade da Magia Caótica, com efeitos intensos e inesperados.", weak_to_proc: lambda { Element.arcane }, resistant_to_proc: lambda { Element.arcane }, negative_effect: NegativeEffect.control },
  {title: "Trovão", permalink: "thunder",	short_description: "Controla a estática e a eletricidade inerente na matéria do mundo.", weak_to_proc: lambda { Element.materia }, resistant_to_proc: lambda { Element.water }, negative_effect: NegativeEffect.paralize },
  {title: "Fogo", permalink: "fire",	short_description: "Controla o calor primordial e destruidor do Fogo e da Lava.", weak_to_proc: lambda { Element.water }, resistant_to_proc: lambda { Element.ice }, negative_effect: NegativeEffect.burn },
  {title: "Gelo", permalink: "ice",	short_description: "Controla o frio implacável, o Gelo puro e matéria congelada.", weak_to_proc: lambda { Element.fire }, resistant_to_proc: lambda { Element.materia }, negative_effect: NegativeEffect.slow },
  {title: "Luz", permalink: "holy",	short_description: "Controla a Magia da Luz e a essência do Divino.", weak_to_proc: lambda { Element.darkness }, resistant_to_proc: lambda { Element.darkness }, negative_effect: NegativeEffect.purge },
  {title: "Matéria", permalink: "materia",	short_description: "Controla a própria Terra e seus Materiais.", weak_to_proc: lambda { Element.ice }, resistant_to_proc: lambda { Element.thunder }, negative_effect: NegativeEffect.stun },
  {title: "Natureza", permalink: "nature",	short_description: "Controla a vida verde, a flora e suas raízes.", weak_to_proc: lambda { Element.acid }, resistant_to_proc: lambda { Element.wind }, negative_effect: NegativeEffect.constrict },
  {title: "Trevas", permalink: "darkness",	short_description: "Controla a Magia proibida das Trevas.", weak_to_proc: lambda { Element.holy }, resistant_to_proc: lambda { Element.holy }, negative_effect: NegativeEffect.terror },
  {title: "Vento", permalink: "wind",	short_description: "Controla o Ar, a força da densidade e as correntes.", weak_to_proc: lambda { Element.nature }, resistant_to_proc: lambda { Element.acid }, negative_effect: NegativeEffect.push },
]
elements.each do |element|
  Element.create!(
    element
      .except(:weak_to_proc, :resistant_to_proc)
      .merge({long_description: element[:short_description]}),
  )
end
elements.each do |element|
  element[:weak_to] = element[:weak_to_proc].call
  element[:resistant_to] = element[:resistant_to_proc].call

  Element.find_or_initialize_by(
    permalink: element[:permalink],
  ).update!(element.except(:weak_to_proc, :resistant_to_proc))
end

# Criando Personagem de Exemplo
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

# Criando Itens do Personagem de Exemplo
CharacterItem.create!(
  item: Grimo.allura,
  character: Character.first,
  notes: "Elemento Fogo - Fraqueza Agua - Efeito Queimar",
  property: "fire",
)