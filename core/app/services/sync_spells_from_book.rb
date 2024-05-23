class SyncSpellsFromBook
  def call
    spells = HTTParty.get("https://www.fabulasegoblins.com.br/spells.json")
    spells.filter { |sp| sp["tags"].present? }.map do |spell|
      object = find_object(spell)
      Spell.new(
        book_url: object&.book_url || nil,
        cast_distance: spell["cast_distance"],
        cast_distance_number: spell["cast_distance"],
        duration_time: spell["duration_time"],
        duration_time_number: spell["duration_time"],
        icon: spell["icon"],
        long_description: spell["description"],
        magic_cost: spell["magic_cost"],
        magic_cost_number: spell["magic_cost"],
        permalink: spell["id"],
        range_amount: spell["range_amount"],
        sacrifice: (spell["tags"] || []).include?("sacrifice"),
        short_description: spell["caption"],
        tags: spell["tags"],
        title: spell["name"],
        ultimate: (spell["tags"] || []).include?("ultimate"),
        external_id: spell["id"],
        tier: 1,
        action_type_id: '',
        attack_logic_id: '',
        range_type_id: '',
        element_id: '',
      )
    end
  end

  def find_object(spell)
    object =
      find_grimo_by_tags(spell['tags']) ||
      find_role_by_tags(spell['tags']) ||
      find_race_by_tags(spell['tags']) ||
      find_culture_by_tags(spell['tags'])

    return if object.blank?

    object
  end

  def spell_type(spell)
    return 'grimo' if find_grimo_by_tags(spell['tags'])
    return 'role' if find_role_by_tags(spell['tags'])
    return 'specie' if find_race_by_tags(spell['tags'])
    return 'culture' if find_culture_by_tags(spell['tags'])
    return 'unknown'
  end

  def find_role_by_tags(tags)
    string = (CharacterRole.all.map(&:permalink).map { |perma| perma.split('-').last } & tags).first
    return if string.blank?
    CharacterRole.where("permalink LIKE ?","%#{string}%").first
  end

  def find_culture_by_tags(tags)
    permalink_map = {
      "children-of-depths" => "filhos-de-timeria",
      "children-of-underground" => "filhos-do-subterraneo",
      "children-of-sands" => "filhos-das-areias",
      "children-of-plains" => "filhos-do-povo-livre",
      "children-of-storms" => "filhos-da-tempestade",
      "children-of-clouds" => "filhos-de-arcadia",
      "children-of-mountains" => "filhos-de-eregor",
      "children-of-islands" => "filhos-das-ilhas",
      "children-of-sailing" => "filhos-de-caldera",
      "children-of-dew" => "filhos-do-orvalho",
    }

    match_cultures = tags & permalink_map.keys
    return if match_cultures.blank?
    Culture.find_by(permalink: permalink_map[match_cultures[0]])
  end

  def find_action_type(spell)
    action_map = {
      "Passiva" => "Passiva",
      "Ativa" => "Ativa",
      "Inicial" => "Inicial",
      "Passive" => "Passiva",
      "Reação" => "Reação",
      "Aprimoramento" => "Aprimoramento",
      "Mágico" => "Ativa",
      "Ritual" => "Ritual",
      "Ação" => "Ativa",
      "Instância" => "Instância",
      "Movimento" => "Movimento",
      "Ativa e Reação" => "Reação",
      "Ação e Reação" => "Reação",
    }

    match = action_map[spell['action_type']]
    return if match.blank?
    ActionType.find_by(title: match)
  end

  def find_race_by_tags(tags)
    string = (Specie.all.map(&:permalink).map { |perma| perma.split('-').last } & tags).first
    return if string.blank?
    Specie.where("permalink LIKE ?","%#{string}%").first
  end

  def find_grimo_by_tags(tags)
    string = (Grimo.all.map(&:permalink).map { |perma| perma.split('-').last } & tags).first
    return if string.blank?
    Grimo.where("permalink LIKE ?","%#{string}%").first
  end
end

#  id                   :bigint           not null, primary key
#  book_url             :text
#  cast_distance        :string
#  cast_distance_number :integer
#  duration_time        :string
#  duration_time_number :integer
#  icon                 :string
#  long_description     :text
#  magic_cost           :string
#  magic_cost_number    :integer
#  permalink            :string
#  range_amount         :string
#  sacrifice            :boolean
#  short_description    :text
#  tags                 :string
#  tier                 :integer
#  title                :string
#  ultimate             :boolean
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  action_type_id       :bigint           not null
#  attack_logic_id      :bigint           not null
#  element_id           :bigint           not null
#  external_id          :string
#  range_type_id        :bigint           not null
#
