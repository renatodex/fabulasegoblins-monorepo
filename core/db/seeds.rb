# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

def create_rows(klass, rows, unique_field = :permalink)
  rows.each do |row|
    item =
      if unique_field == :all
        klass.find_or_initialize_by(row)
      else
        klass.find_or_initialize_by("#{unique_field}": row[unique_field])
      end

    if row.key? :short_description
      item.update(row.merge({short_description: row[:long_description]}))
    else
      item.update(row)
    end
  end
end

## Criando usuário de teste
create_rows(User, [
  {
    email: "teste@tendadogoblin.com",
    password: "test123",
    password_confirmation: "test123"
  }
], :email)

## Criando Tipos de Itens
create_rows(ItemType, [
  {title: "Armadura",	permalink: "armor", long_description: "Armaduras aumentam a sobrevivência do seu personagem, reduzindo a possibilidade de receber dano de inimigos no combate. Elas também podem te deixar mais lento."},
  {title: "Arma",	permalink: "weapon", long_description: "Armas são sua forma mais básica de ataque, cada classe costuma ter sua própria especialização, mas é possível se especializar em novos tipos armas com o passar do tempo."},
  {title: "Grimo",	permalink: "grimo", long_description: "Grimos são sua principal fonte de poder mágico, e é através dele que você aumenta seu vínculo com a magia enfraquecida das Terras Místicas"},
  {title: "Poção",	permalink: "potion", long_description: "Com diversas utilidades, poções podem ter efeitos benéficos e maléficos, portanto, pense bem antes de tomar a sua!"},
  {title: "Pergaminho",	permalink: "scroll", long_description: "Uma versão leve do processo de solidificação mágica dos Grimos. Os Pergaminhos podem conjurar poderes presos em suas fibras mágicas."},
  {title: "Suprimentos",	permalink: "supply", long_description: "Nada melhor do que estar sempre preparado, não é? Suprimentos são seu alicerce de sobrevivência em qualquer aventura."},
  {title: "Armazenamento",	permalink: "storage", long_description: "As masmorras possuem muitos tesouros, mas de nada adianta se não puder carregá-los. Os itens de Armazenamento aqui serão seus melhores aliados!"},
  {title: "Ferramentas",	permalink: "tool", long_description: "Ferramentas são o canivete suiço de todo aventureiro, seja parar quebrar, emendar ou separar, é sempre bom contar estes amiguinhos metálicos."},
  {title: "Especial",	permalink: "special", long_description: "Os Itens especiais geralmente não podem ser equipados ou carregados. São apenas Itens de Interação que podem desencadear Bençãos ou Maldições"}
])

## Criando Tipos de Dano
create_rows(DamageType, [
  { title: "Físico", permalink: 'physical', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
  { title: "Mágico", permalink: 'magic', long_description: "O dano mágico é aquele que é realizado por poderes, Grimos, armas ou artefatos que possuem essência mágica, sendo capazes de causar dano elemental, não-elemental, ou até realizar proezas extraordinárias que não seriam possíveis pelos meios comuns." },
  { title: "Perfurante", permalink: 'piercing', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
  { title: "Contusivo", permalink: 'contusive', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
  { title: "Cortante", permalink: 'cutting', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
  { title: "Físico", permalink: 'physical', long_description: "O dano físico é aquele normalmente realizado por armas comuns ou que não utilizam propriedades mágicas." },
])

# Criando Culturas
create_rows(Culture, [
  { permalink: "filhos-do-orvalho", title: "Filhos do Orvalho", short_description: "Nascidos em pequenos vilarejos ou reinos situados no interior de matas densas, os Filhos da Floresta, a exemplo dos Galanorianos, estão acostumados com a presença da vida selvagem a sua porta.", key_values: "Sobrevivência, Agilidade, Intelecto", clothes_description: "Fibras de Folhas, Peles de Animais, e Couro vegetal", common_divinities: "Musgom, Gumera, Ogoron", bonuses: "Sobrevivência +1, Agilidade +1, Intelecto +1, P.M +2"},
  { permalink: "filhos-das-areias", title: "Filhos das Areias", short_description: "Os Filhos do Deserto representam os povos que habitam as terras áridas e quentes. Suas cidades são verdadeiros Oasis em meio a imensidão de areia e pedra, e sua cultura é marcada pela sobrevivência e pela força.", key_values: "Resiliência, Força, Sobrevivência", clothes_description: "Túnicas Leves, Trajes acolchoados, e Fibra de Cacto", common_divinities: "Moltron, Valamir, Valeon", bonuses: "Resiliência +1, Sobrevivência +1, Força +1, P.V +4"},
  { permalink: "filhos-de-caldera", title: "Filhos da Caldera", short_description: "Acostumados a passar meses velejando no extenso e inexplorado mar de Caldera, esses Aventureiros estão desacostumados com a comodidade da Terra. Reinos portuários como Tol'Deran, Nuvenar e Celendor são com certeza a única porção de terra que eles podem considerar como um \"Porto Seguro\", e até, talvez, chamar de lar.", key_values: "Exploração, Adaptação, Disciplina", clothes_description: "Trajes Leves e Quentes, Tecidos a base de Algodão e Couro especiais para baixas temperaturas", common_divinities: "Ehphyros, Valis, Estiros", bonuses: "Agilidade +1, Influência +1, Resiliência +1, Iniciativa +2"},
  { permalink: "filhos-de-arcadia", title: "Filhos de Arcádia", short_description: "Tudo é diferente no mundo acima das Núvens. E nas Terras Místicas, não é só a vida selvagem que conseguiu se adaptar nas altas altitudes. Parar viver neste mundo, você não precisa necessariamente ter nascido como uma criatura alada, assim como os Razalans e os Luminins, pois qualquer um, até mesmo Goblins podem se aventurar nas alturas do continente flutuante Arcádia.", key_values: "Estudo, Conhecimento, Inovação", clothes_description: "Túnicas chamativas com Algodão Oxidado, Trajes de Frio com muitas camadas", common_divinities: "Zaravos, Ysanar, Qabalis", bonuses: "Intelecto +1, Elo Mágico +1, Destino +1, P.M +3"},
  { permalink: "filhos-das-ilhas", title: "Filhos das Ilhas", short_description: "Os Nativos, ou Filhos das Ilhas, são um grupo seleto de pessoas que habitam as Ilhas dos Arquipélagos Terrestres das Terras Místicas. Essas Ilhas são ambientes de terra virgem que são guardados e protegidos por tribos Nativas ancestrais.", key_values: "Espiritismo, Misticismo, Conexão", clothes_description: "Trajes tribais, Mantos rúnicos e muitos adereços", common_divinities: "Ogoron, Herodus, Dinímia", bonuses: "Espírito +1, Elo Mágico +1,Sobrevivência +1, P.M +4"},
  { permalink: "filhos-do-subterraneo", title: "Filhos do Subterrâneo", short_description: "Os Filhos do Subterrâneo vivem em comunidades organizadas em territórios subterrâneos, como extensas cavernas e grutas remotas. Esse povo aprendeu a viver mesmo com os perigos da escuridão e a proximidade das criaturas do subterrâneo.", key_values: "Proteção, Forja, União", clothes_description: "Trajes metálicos e de couro com muitas camadas", common_divinities: "Herodus, Xenosh, Icaron", bonuses: "P.V +5, Pontos de Defesa +1, Pontos de Ataque +1, Resiliência +1"},
  { permalink: "filhos-da-tempestade", title: "Filhos da Tempestade", short_description: "Os Filhos da Tempestade são uma Seita muito antiga nas Terras Místicas que acredita no poder da alta fé para salvar o mundo da escuridão. Essa organização é tão poderosa que possui Reinos inteiros dedicados à adoração de sua doutrina.", key_values: "Doutrina, Religião, Ordem", clothes_description: "Túnicas elegantes, capuzes e adereços religiosos", common_divinities: "Quaemanir, Dzeranir, Ysanar", bonuses: "Destino +1, Influência +1, Espírito +1"},
  { permalink: "filhos-do-povo-livre", title: "Filhos do Povo Livre", short_description: "Imensos acampamentos itinerantes se extendem por kilômetros nas grandes Planícies Mediterrâneas das Terras Místicas. Esses reinos móveis foram originalmente fundados por Nativos que moravam nas Ilhas externas ao continente, que acabaram migrando para os Reinos Mediterrâneos, mas não conseguiram se adaptar na vida nas cidades.", key_values: "Agricultura, Comércio, Fronteiras", clothes_description: "Trajes típico de viajantes, com muitas aberturas e bolsos", common_divinities: "Somonir, Joromur, Aypheria", bonuses: "Influência +1, Agilidade +1, Pontos de Ataque +1"},
  { permalink: "filhos-de-eregor", title: "Filhos de Eregor", short_description: "O Povo Eregor é representado pelos aglomerados de reinos e cidades que populam grandes conjuntos de montanhas e desfiladeiros. Acostumados com a arte de forja e magia, esses reinos prosperaram devido a sua localização privilegiada, tornando-se locais propícios para aqueles que buscam aprender tecnologia.", key_values: "Ceticismo, Tecnologia, Forja", clothes_description: "Roupas ornamentadas, túnicas banhadas em ouro e pequenas jóias como adereços", common_divinities: "Moltron, Razandibu e Beremord", bonuses: "Força +1, Influência + 1, Resiliência +1"},
  { permalink: "filhos-de-timeria", title: "Filhos de Timéria", short_description: "Como um Filho de Timéria, você nasceu e viveu por um longo tempo nas Terras do Oceano de Timéria, seja em um pequeno vilarejo, ou em uma das grandes cidades submersas como Baion, Cardumia ou Pomedon.", key_values: "Mistério, Equilíbrio, Respeito", clothes_description: "Couro aquático, Exo-Esqueletos, Túnicas de Lã de Algas", common_divinities: "Koroma, Lazan, Gaeria", bonuses: "Elo Mágico +1, Espírito +1, Força +1"},
])

# Criando Papéis de Personagem
create_rows(CharacterRole, [
  { title: "Carregador", permalink: "carrier", base_hp: 14, base_mp: 12, base_movement: 5, weapon_proficience: "Força ou Agilidade", hp_per_level: [4, 4, 8, 8], mp_per_level: [2,4,4,6],  short_description: "Você prioriza o combate próximo e está disposto a receber dano se isso significar causar mais dano." },
  { title: "Atirador", permalink: "shooter", base_hp: 14, base_mp: 12, base_movement: 5, weapon_proficience: "Agilidade ou Sobrevivência", hp_per_level: [3,3,6,6], mp_per_level: [3,3,6,6],  short_description: "Você prioriza o combate a distância e prefere não receber dano e ainda sim causar muito dano." },
  { title: "Tanque", permalink: "tank", base_hp: 18, base_mp: 12, base_movement: 4, weapon_proficience: "Força ou Resiliência", hp_per_level: [5,5,10,10], mp_per_level: [2,4,4,6],  short_description: "Você é uma parede de tijolos, e se os inimigos querem chegar em seus aliados, terão de passar por você." },
  { title: "Suporte", permalink: "support", base_hp: 12, base_mp: 18, base_movement: 3, weapon_proficience: "Intelecto, Elo Mágico ou Espírito", hp_per_level: [2,4,4,6], mp_per_level: [5,5,10,10],  short_description: "Sua especialidade é auxiliar seus aliados, conjurando auras e benefícios cruciais para mantê-los vivos." },
  { title: "Conjurador", permalink: "caster", base_hp: 12, base_mp: 14, base_movement: 4, weapon_proficience: "Intelecto, Elo Mágico ou Espírito", hp_per_level: [2,4,4,6], mp_per_level: [4,4,8,8],  short_description: "Você prefere manter distância de seus inimigos, utilizando feitiços mágicos para causar muito dano." },
  { title: "Utilitário", permalink: "utility", base_hp: 14, base_mp: 14, base_movement: 4, weapon_proficience: "Qualquer uma", hp_per_level: [3,3,6,6], mp_per_level: [3,3,6,6],  short_description: "O seu estilo é misto, e prefere uma abordagem mais equilibrada que varie combate a distância e corpo a corpo." },
])

# Criando Espécies
create_rows(Specie, [
  { title: "Goblin", permalink: "goblin", playable: true, extra_attribute_points: 2, short_description: "Os Goblins são a raça mais dominante no mundo das Terras Místicas. Alegres e trabalhadores, os Goblins ergueram verdadeiros impérios com sua perseverança e trabalho árduo. Nos dias de hoje, eles sofrem com os impactos do Blecaute, e lutam diariamente para que possam reconquistar tudo que foi perdido." },
  { title: "Armadon", permalink: "armadon", playable: true, extra_attribute_points: 0, short_description: "Os Armadons são uma raça pangoliana exclusiva de climas quentes e seco. São biologicamente capazes sobreviver por longos períodos abaixo da terra, sem luz solar e até sem água corrente. Os Armadons são conhecidos como verdadeiros engenheiros, construíndo cidades em locais onde não se imaginava ser possível suportar vida." },
  { title: "Metalóide", permalink: "metaloide", playable: true, extra_attribute_points: 0, short_description: "Criados caóticamente a partir da magia bruta, Metalóides são seres mágicos, possuindo bolsões corporais por onde passa um flúido metálico derivado da magia. Capazes de manipular a magia para criar itens mágicos a partir de materiais brutos, Metalóides são conhecidos por suas sociedades fechadas e místicas." },
  { title: "Razalan", permalink: "razalan", playable: true, extra_attribute_points: 0, short_description: "Espécie com características Reptilianas e Aviárias, os Razalans são conhecidos por construírem seus reinos isolados em ilhas flutuantes. Tradicionalmente eram conhecidos como agricultores de magia no passado, até que o Blecaute tornou seus campos inférteis, e precisaram formar alianças mais fortes com os outros reinos terrestres. Apesar de possuírem asas, não são capazes de voar, mas podem planar e flutuar a baixas altitudes." },
  { title: "Valdari", permalink: "valdari", playable: true, extra_attribute_points: 0, short_description: "Os Valdaris são uma espécie de Anfíbios que dominam primariamente os extensos rios e oceanos de Galantia. Fisicamente eles se desenvolveram para se adaptar a viverem submersos, possuindo a capacidade de respirar normalmente tanto dentro quanto fora d'agua." },
  { title: "Luminin", permalink: "luminin", playable: true, extra_attribute_points: 0, short_description: "Os Luminins são pequenas criaturas humanóides que possuem alto grau de sensciencia e uma sociedade organizada. Um indivíduo adulto pode chegar a uma média de 1,30m, sendo consideravelmente pequeno até mesmo comparados com raças anatomicamente menores como Armadons. Seus corpos possuem uma bioluminescência natural, emitindo um brilho de tonalidade púrpura, que se extende por seu corpo todo, dos pés a cabeça. Diferente do que se costuma deduzir, os Luminins não são criaturas de constituição mágica, pois seu brilho característico vêm de característica química de seus corpos, não possuindo qualquer vestigio de magia em sua emissão de luz." },
])

# Criando Tipos de Ação (não usado ainda)
create_rows(ActionType, [
  { title: "Ativa", permalink: 'active', short_description: "Ações ativas custam uma ação para ser utilizada. Em um combate, um personagem pode realizar uma Ação Maior, uma Menor, e muitas Ações Livres, mas todos esses sub-tipos estão contemplados dentro da Ação Ativa." },
  { title: "Passiva", permalink: 'passive', short_description: "Ações passivas não só não custam uma ação menor ou maior para serem realizadas, como também estão ativas o tempo todo, sem que uma ativação explicita seja necessária." },
  { title: "Reação", permalink: 'reaction', short_description: "Diferente das Ações Ativas, as Ações de Reação podem ser utilizadas em resposta a um determinado evento especificado. Geralmente inimigos do tipo Nêmesis possuem muitas Ações de Reação." },
  { title: "Movimento", permalink: 'movement', short_description: "Essas Ações são usadas no lugar ou em conjunto com ações de movimento." },
  { title: "Ritual", permalink: 'ritual', short_description: "Ações do tipo Ritual são ações bastante complexas que geralmente exigem um grande tempo de execução e não podem ser realizadas em combate." },
  { title: "Aprimoramento", permalink: 'upgrade', short_description: "Aprimoramento não é bem uma Ação, mas é uma forma inteligente para mensurar poderes que são 'Evoluções' ou 'Upgrades' de outros poderes." },
  { title: "Inicial", permalink: 'initial', short_description: "Ações Iniciais são para descrever 'Poderes' que concedem características iniciais aos personagens. Elas se resolvem na hora que são adicionadas e deixam de ser poderes depois." },
  { title: "Instância", permalink: 'instance', short_description: "Instância é um subtipo de Ação Ativa, usada para descrever poderes que, ao serem usados, se mantém ativos indeterminadamente até serem substituidos ou cancelados pelo conjurador." },
])

# Criando Tipos de Ação (não usado ainda)
create_rows(AttackLogic, [
  { title: "Física", permalink: 'physical', short_description: "Ações que utilizam capacidades de origem físicas, como atacar com uma Arma ou um Bastão." },
  { title: "Mágica", permalink: 'magical', short_description: "Ações que utilizam capacidades de origem mágicas, como conjurar uma magia ou ritual." },
  { title: "Mista", permalink: 'mixed', short_description: "Ações que utilizam ambas capacidades físicas e mágicas." },
  { title: "Indefinida", permalink: 'notset', short_description: "Ações que não possuem uma definição." },
  { title: "Nenhuma", permalink: 'none', short_description: "Ações que exigem capacidades nem físicas nem mágicas." },
])

# Criando Tipos de Alcance
create_rows(RangeType, [
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
  { title:"Misto", permalink: "mixed", short_description: "Essa magia tem múltiplas variações de tipo de alcance." },
  { title:"Global", permalink: "global", short_description: "Essa magia sempre afeta todos os alvos participando do combate." },
])

# Criando Atributos da Ficha
create_rows(SheetAttribute, [
  { icon: 'GiMuscleUp', title: "Força", permalink: "strength", long_description: "Representa a sua Força, e é usado para definir seus Pontos de Vida e sua capacidade de carregamento de itens."},
  { icon: 'GiShield', title: "Resiliência", permalink: "resilience", long_description: "Define sua resistência a atributos negativos e Traumas."},
  { icon: 'GiRunningNinja', title: "Agilidade", permalink: "agility", long_description: "Define sua agilidade e melhora sua movimentação. Também é usada para definir sua habilidade com armas de projéteis."},
  { icon: 'GiCrystalBall', title: "Elo Mágico", permalink: "magic_elo", long_description: "Representa o \"quão mágico\" você é para o mundo. Usado para definir seus Pontos de Magia."},
  { icon: 'GiAngelWings', title: "Espírito", permalink: "spirit", long_description: "Representa sua Mediunidade, Define sua Defesa Mágica geral, e é usado para definir sua habilidade com armas espirituais ."},
  { icon: 'GiBrain', title: "Intelecto", permalink: "intelect", long_description: "Define seu Grau de Erudição e permite destravar vínculos adicionais com Grimos."},
  { icon: 'GiDiceSixFacesFive', title: "Destino", permalink: "destiny", long_description: "Define o quão Destinado você é, usado em Ações de Perícia."},
  { icon: 'GiCampfire', title: "Sobrevivência", permalink: "survival", long_description: "Define sua capacidade de sobreviver em situações difíceis. Define sua capacidade de se adaptar à condições climáticas, encontrar coisas e improvisar."},
  { icon: 'GiConversation', title: "Influência", permalink: "influence", long_description: "Define sua eloquência e poder de influência sobre as pessoas. Melhora os preços em Mercadores, e também é usado para Diplomacia e Manipulação."},
])

# Criando Grimos
create_rows(Item, [
  { title: "Brasão de Giurad", short_description: "O s Guerreiros de Giurad são treinados para se tornarem cavaleiros da justiça nas Academias de combate. Lá, eles aprendem a manipular a Espada e o Escudo, utilizando poderosas habilidades estratégicas para beneficiar seus aliados enquanto causam dano em seus inimigos. Todo Cavaleiro faz um juramento de lealdade a um Tutor, figura sábia e respeitada cujo papel é orientá-lo em sua jornada.", permalink: "brasao-de-giurad", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Jóia de Lunn", short_description: "A Jóia de Lunn é o Grimo dos Sacerdotes da Igreja de Lunn. (também conhecido como Luniísmo). Seus Adeptos aprendem a arte da Cura e do Suporte em sua forma mais pura, e são vistos como os Pilares que combatem o crescimento do mal. A palavra de Lunn é venerada em diversos cantos do mundo, e seus Sacerdotes são caracterízados pelo porte do Cajado e da Cruz de Lunn.", permalink: "joia-de-lunn", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Orbe de Allura", short_description: "A Orbe de Allura é um Grimo elemental, que ao ser vinculado, pode adquirir qualquer um dos 12 Aspectos Elementais do mundo. Os Adeptos de Allura se tornam Arcanistas elementais que canalizam seu poder à partir do Grimo podendo conjurar poderosos feitiços ofensivos e defensivos. Os Adeptos de Allura também aprendem a utilizar o Cetro e a Orbe para canalizar o poder dos Elementos.", permalink: "orbe-de-allura", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Olho de Kanus", short_description: "A Guilda de Kanus é conhecida por formar exímios sobreviventes letrados na arte da Caça. Os Adeptos de Kanus são mestres na arte de rastrear e abater criaturas selvagens, e para isso, utilizam seu domínio da arte do Arco e Flecha e da Adaga. Os Caçadores tem uma relação próxima com a Guilda, que oferece recompensas por contratos de caça de criaturas aos seus membros.", permalink: "olho-de-kanus", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Arca de Ravna", short_description: "Os Adeptos de Ravna acreditam que a forma mais pura de manipular a Magia seja através de seus portadores originais, as Criaturas Selvagens. A variedade de conhecimentos desse Grimo faz com que os Adeptos de Ravna sejam excelente utilitários. Além de conjurar a poderosa magia selvagem das Criaturas, os adeptos aprendem a combater seus inimigos com Garras e Estilingues mágicos, que atingem seus inimigos a uma enorme distância.", permalink: "arca-de-ravna", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Tótem de Darian", short_description: "Os Adeptos de Darian são Xamãs espirituais. O Tótem é conhecido como o Grimo dos Espíritos, e seus Adeptos aprendem a se comunicar com o plano Astral para conjurar magias e rituais poderosos. Cada Adepto de Darian é treinado com a ajuda de um Mentor, escolhido no início de sua jornada. O Mentor ensina o Dariano a navegar pelo perigoso Plano Astral, utilizando para isso o poder residual dos Gravetos e Tábuas Mágicas.", permalink: "totem-de-darian", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Aparato de Magni", short_description: "Os Adeptos de Magni originais acreditavam que a Magia se corrompe sempre que é manipulada diretamente contra seus inimigos. Ao invés disso, eles desenvolveram Magnis, construtos inanimados controlados magicamente por seu portador através de Tecmagi, um tipo de Tecnologia aliada à Magia. Treinados no combate utilitário, esses Tecmagos podem utilizar Bombas e Garruchas como armas principais.", permalink: "aparato-de-magni", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Frasco de Zanari", short_description: "Os Adeptos de Zanari são conhecidos como Assassinos das Sombras, manipulando as próprias trevas para mascarar sua presença, enquanto embanham suas armas com venenos mortais, derrotando seus inimigos com ataques rápidos e precisos. Muitas vezes interpretados como assassinos, os destemidos Zanaris são treinados para manipular a Katar e os infames Dardos Venenosos.", permalink: "frasco-de-zanari", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Insígnia de Qatun", short_description: "Ilusão é a única palavra que pode definir um  Adepto de Qatun.Esses curiosos Feiticeiros são treinados na arte de manipular a mente e a matéria, criando ilusões convincentes que podem confundir seus inimigos. Além de Mestres do Ilusionismo e dominadores da Magia do Caos, esses elegantes Fortunos são treinados para combater com Bengalas e Espadas portáteis conhecidas como Saxos.", permalink: "insignia-de-qatun", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
  { title: "Selo de Ixin", short_description: "Os Guerreiros de Ixin manipulam a Energia Rúnica, cuja origem ainda é um enigma para a civilização moderna. Para isso, os Adeptos utilizam as 3 Runas Templárias, Urt, Xah e Rah, e podem materializar Feixes de Luzes poderosos, Linhas Etéreas e uma série de poderes Ofensivos e utilitários. Os Guerreiros de Ixin são treinados no combate ágil, e podem combater com Manoplas rúnicas e Bastões.", permalink: "selo-de-ixin", formula: nil, bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, item_type: ItemType.grimo, sheet_attribute: nil, book_url: nil },
])

# Criando Items
create_rows(Item, [
  { title: "Poção de Cura", short_description: "Uma poção de cura comum", permalink: "healing-potion", formula: "1d12", item_type: ItemType.find_by_permalink('potion'), bonus_magic_attack: nil, bonus_magical_defense: nil, bonus_physical_attack: nil, bonus_physical_defense: nil, buy_price: nil, sell_price: nil, durability: nil, slots_used: nil, damage_type: nil, sheet_attribute: nil, book_url: nil },
])

create_rows(Item, [
  { title: "Adaga de Madeira", short_description: "Uma adaga feita de madeira.", permalink: "wooden-dagger", physical_formula: "2d8 + 2", magical_formula: "0", formula: "2d8 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Agilidade"), durability: 2, icon: "GiBowieKnife" },
  { title: "Arco de Madeira", short_description: "Um arco feito de madeira.", permalink: "wooden-bow", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Sobrevivência"), durability: 2, icon: "GiWoodAxe" },
  { title: "Bastão de Madeira", short_description: "Um bastão feito de madeira.", permalink: "wooden-staff", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Agilidade"), durability: 2, icon: "GiStraightPipe" },
  { title: "Bengala de Madeira", short_description: "Uma bengala feita de madeira.", permalink: "wooden-cane", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Influência"), durability: 2, icon: "GiWoodStick" },
  { title: "Besta de Madeira", short_description: "Uma besta feita de madeira.", permalink: "wooden-crossbow", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Sobrevivência"), durability: 2, icon: "GiCrossbow" },
  { title: "Chicote de Madeira", short_description: "Um chicote feito de madeira.", permalink: "wooden-whip", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Agilidade"), durability: 2, icon: "GiWhip" },
  { title: "Clava de Madeira", short_description: "Uma clava feita de madeira.", permalink: "wooden-club", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Resiliência"), durability: 2, icon: "GiWoodClub" },
  { title: "Cruz de Madeira", short_description: "Uma cruz feita de madeira.", permalink: "wooden-cross", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Espírito"), durability: 2, icon: "GiHolySymbol" },
  { title: "Dardos de Madeira", short_description: "Dardos feitos de madeira.", permalink: "wooden-darts", physical_formula: "2d4 + 2", magical_formula: "0", formula: "2d4 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Destino"), durability: 2, icon: "GiDart" },
  { title: "Espada de Madeira", short_description: "Uma espada feita de madeira.", permalink: "wooden-sword", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiBroadsword" },
  { title: "Estilingue de Madeira", short_description: "Um estilingue feito de madeira.", permalink: "wooden-sling", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Sobrevivência"), durability: 2, icon: "GiSlingshot" },
  { title: "Foice de Madeira", short_description: "Uma foice feita de madeira.", permalink: "wooden-scythe", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Agilidade"), durability: 2, icon: "GiScythe" },
  { title: "Graveto de Madeira", short_description: "Um graveto feito de madeira.", permalink: "wooden-stick", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Intelecto"), durability: 2, icon: "GiWoodStick" },
  { title: "Katar de Madeira", short_description: "Um katar feito de madeira.", permalink: "wooden-katar", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Agilidade"), durability: 2, icon: "GiBatLeth" },
  { title: "Lança de Madeira", short_description: "Uma lança feita de madeira.", permalink: "wooden-spear", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiSpearHook" },
  { title: "Machado de Madeira", short_description: "Um machado feito de madeira.", permalink: "wooden-axe", physical_formula: "2d12 + 2", magical_formula: "0", formula: "2d12 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Resiliência"), durability: 2, icon: "GiWoodAxe" },
  { title: "Manopla de Madeira", short_description: "Uma manopla feita de madeira.", permalink: "wooden-gauntlet", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Resiliência"), durability: 2, icon: "GiGauntlet" },
  { title: "Martelo de Madeira", short_description: "Um martelo feito de madeira.", permalink: "wooden-hammer", physical_formula: "2d12 + 2", magical_formula: "0", formula: "2d12 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Resiliência"), durability: 2, icon: "GiWarhammer" },
  { title: "Maça de Madeira", short_description: "Uma maça feita de madeira.", permalink: "wooden-mace", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Resiliência"), durability: 2, icon: "GiMaceHead" },
  { title: "Picareta de Madeira", short_description: "Uma picareta feita de madeira.", permalink: "wooden-pickaxe", physical_formula: "2d6 + 2", magical_formula: "0", formula: "2d6 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiWarPick" },
  { title: "Projéteis de Madeira", short_description: "Projéteis feitos de madeira.", permalink: "wooden-projectiles", physical_formula: "2d4 + 2", magical_formula: "0", formula: "2d4 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 50, damage_type: DamageType.find_by_title("Contusivo"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiThrownDaggers" },
  { title: "Punhal de Madeira", short_description: "Um punhal feito de madeira.", permalink: "wooden-dagger", physical_formula: "2d8 + 2", magical_formula: "0", formula: "2d8 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Destino"), durability: 2, icon: "GiPlainDagger" },
  { title: "Saxo de Madeira", short_description: "Um saxo feito de madeira.", permalink: "wooden-saxo", physical_formula: "2d10 + 2", magical_formula: "0", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Cortante"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiFragmentedSword" },
  { title: "Tridente de Madeira", short_description: "Um tridente feito de madeira.", permalink: "wooden-trident", physical_formula: "2d12 + 2", magical_formula: "0", formula: "2d12 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Perfurante"), sheet_attribute: SheetAttribute.find_by_title("Força"), durability: 2, icon: "GiTrident" },
  { title: "Tábua de Pó de Gema", short_description: "Uma tábua feita de pó de gema mágica.", permalink: "gem-dust-board", physical_formula: "2d4", magical_formula: "2d10 + 2", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 200, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Espírito"), durability: 2, icon: "GiBrokenTablet" },
  { title: "Bomba Mágica de Pó de Gema", short_description: "Uma bomba mágica feita de pó de gema.", permalink: "gem-dust-magic-bomb", physical_formula: "0", magical_formula: "2d10 + 2", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Intelecto"), durability: 2, icon: "GiFireBomb" },
  { title: "Cetro de Pó de Gema", short_description: "Um cetro feito de pó de gema mágica.", permalink: "gem-dust-scepter", physical_formula: "2d8", magical_formula: "2d8 + 2", formula: "2d8 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Intelecto"), durability: 2, icon: "GiCrystalWand" },
  { title: "Cajado de Pó de Gema", short_description: "Um cajado feito de pó de gema mágica.", permalink: "gem-dust-staff", physical_formula: "2d8", magical_formula: "2d8 + 2", formula: "2d8 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Elo Mágico"), durability: 2, icon: "GiWizardStaff" },
  { title: "Varinha de Pó de Gema", short_description: "Uma varinha feita de pó de gema mágica.", permalink: "gem-dust-wand", physical_formula: "2d4", magical_formula: "2d10 + 2", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Elo Mágico"), durability: 2, icon: "GiFairyWand" },
  { title: "Prisma de Pó de Gema", short_description: "Um prisma feito de pó de gema mágica.", permalink: "gem-dust-prism", physical_formula: "0", magical_formula: "2d12 + 2", formula: "2d12 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Elo Mágico"), durability: 2, icon: "GiPrism" },
  { title: "Orbe de Pó de Gema", short_description: "Um orbe feito de pó de gema mágica.", permalink: "gem-dust-orb", physical_formula: "2d4", magical_formula: "2d10 + 2", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Elo Mágico"), durability: 2, icon: "GiOrbWand" },
  { title: "Urna de Pó de Gema", short_description: "Uma urna feita de pó de gema mágica.", permalink: "gem-dust-urn", physical_formula: "2d4", magical_formula: "2d12 + 2", formula: "2d12 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Espírito"), durability: 2, icon: "GiPorcelainVase" },
  { title: "Livro de Pó de Gema", short_description: "Um livro feito de pó de gema mágica.", permalink: "gem-dust-book", physical_formula: "2d4", magical_formula: "2d10 + 2", formula: "2d10 + 2", item_type: ItemType.find_by_permalink('weapon'), bonus_magic_attack: nil, bonus_physical_attack: nil, buy_price: 300, damage_type: DamageType.find_by_title("Mágico"), sheet_attribute: SheetAttribute.find_by_title("Intelecto"), durability: 2, icon: "GiSpellBook" }
])

# Criar Condições Negativas
create_rows(NegativeEffect, [
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
])

# Criar Elementos
elements = [
  {title: "Água", permalink: "water",	short_description: "Controla o Líquido essêncial à vida, bem como Oceanos e Rios.", weak_to_proc: lambda { Element.thunder }, resistant_to_proc: lambda { Element.fire }, negative_effect: NegativeEffect.haziness },
  {title: "Ácido", permalink: "acid",	short_description: "Controla os elementos Tóxicos e Ácidos com alto poder de corrosão.", weak_to_proc: lambda { Element.wind }, resistant_to_proc: lambda { Element.nature }, negative_effect: NegativeEffect.corrode },
  {title: "Arcano", permalink: "arcane",	short_description: "Controla a Mágia das Estrelas e a essência do Magiverso.", weak_to_proc: lambda { Element.chaos }, resistant_to_proc: lambda { Element.chaos }, negative_effect: NegativeEffect.silence },
  {title: "Caos", permalink: "chaos",	short_description: "Controla a instabilidade da Magia Caótica, com efeitos intensos e inesperados.", weak_to_proc: lambda { Element.arcane }, resistant_to_proc: lambda { Element.arcane }, negative_effect: NegativeEffect.control },
  {title: "Trovão", permalink: "eletric",	short_description: "Controla a estática e a eletricidade inerente na matéria do mundo.", weak_to_proc: lambda { Element.materia }, resistant_to_proc: lambda { Element.water }, negative_effect: NegativeEffect.paralize },
  {title: "Fogo", permalink: "fire",	short_description: "Controla o calor primordial e destruidor do Fogo e da Lava.", weak_to_proc: lambda { Element.water }, resistant_to_proc: lambda { Element.ice }, negative_effect: NegativeEffect.burn },
  {title: "Gelo", permalink: "ice",	short_description: "Controla o frio implacável, o Gelo puro e matéria congelada.", weak_to_proc: lambda { Element.fire }, resistant_to_proc: lambda { Element.materia }, negative_effect: NegativeEffect.slow },
  {title: "Luz", permalink: "holy",	short_description: "Controla a Magia da Luz e a essência do Divino.", weak_to_proc: lambda { Element.darkness }, resistant_to_proc: lambda { Element.darkness }, negative_effect: NegativeEffect.purge },
  {title: "Matéria", permalink: "materia",	short_description: "Controla a própria Terra e seus Materiais.", weak_to_proc: lambda { Element.ice }, resistant_to_proc: lambda { Element.thunder }, negative_effect: NegativeEffect.stun },
  {title: "Natureza", permalink: "nature",	short_description: "Controla a vida verde, a flora e suas raízes.", weak_to_proc: lambda { Element.acid }, resistant_to_proc: lambda { Element.wind }, negative_effect: NegativeEffect.constrict },
  {title: "Trevas", permalink: "darkness",	short_description: "Controla a Magia proibida das Trevas.", weak_to_proc: lambda { Element.holy }, resistant_to_proc: lambda { Element.holy }, negative_effect: NegativeEffect.terror },
  {title: "Vento", permalink: "wind",	short_description: "Controla o Ar, a força da densidade e as correntes.", weak_to_proc: lambda { Element.nature }, resistant_to_proc: lambda { Element.acid }, negative_effect: NegativeEffect.push },
  {title: "Nenhum", permalink: "none",	short_description: "Este poder não possui elemento.", weak_to_proc: lambda { }, resistant_to_proc: lambda { } },
]
elements.each do |element|
  Element.find_or_initialize_by(
    permalink: element[:permalink],
  ).update!(
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

# Sincronizando TODAS AS MAGIAS do livro
spells_data = SyncSpellsFromBook.new.call
Spell.transaction do
  # Bulk insert spells
  spells_attributes = spells_data.map { |data| data[:spell_attributes] }
  Spell.upsert_all(spells_attributes, unique_by: :permalink)

  # Collect all owners
  spell_owner_records = []
  spell_ids = Spell.where(permalink: spells_attributes.map { |attr| attr[:permalink] }).pluck(:permalink, :id).to_h
  spells_data.each_with_index do |data, index|
    data[:owner_references].each do |owner|
      spell_id = spell_ids[data[:spell_attributes][:permalink]]
      spell_owner_records << {
        spell_id: spell_id,
        spell_owner_type: owner.owner_type,
        spell_owner_id: owner.id,
        created_at: Time.now,
        updated_at: Time.now
      }
    end
  end

  # Bulk upsert spell owners
  SpellOwner.upsert_all(spell_owner_records, unique_by: [:spell_id, :spell_owner_type, :spell_owner_id])
end


# Criando Personagem de Exemplo
create_rows(Character, [
  {
    title: "Garinori",
    culture: Culture.first,
    code: 'garinori123',
    user: User.first,
    character_role: CharacterRole.first,
    specie: Specie.first,
    short_description: "Personagem teste",
    long_description: "Personagem teste",
    temirs: 175,
    max_mp_points: 42,
    mp_points: 20,
    max_hp_points: 28,
    hp_points: 17,
  },
], :code)

create_rows(CharacterItem, [
  item: Item.allura,
  character: Character.first,
  notes: "Elemento Fogo - Fraqueza Agua - Efeito Queimar",
  property: "fire",
], :all)
