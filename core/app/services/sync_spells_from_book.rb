class SyncSpellsFromBook
  def get_spells
    @spells ||= (
      spells = HTTParty.get("https://www.fabulasegoblins.com.br/spells.json")
      spells.filter { |sp| sp["tags"].present? }
    )
  end

  def call
    get_spells.map.with_index do |spell, index|
      build_spell(spell, index)
    end
  end

  def build_spell(spell, index)
    spell_owners = find_spell_owners(spell)
    puts "Syncing Skill [##{index.to_s.green}] - #{spell['name'].cyan}"
    {
      spell_attributes: {
        book_url: spell_owners&.first&.book_url,
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
        tags: (spell["tags"] || []).join(","),
        title: spell["name"],
        ultimate: (spell["tags"] || []).include?("ultimate"),
        external_id: spell["id"],
        tier: spell["tier"],
        filter_tags: spell_owners.map(&:permalink).join(','),
        action_type_id: find_action_type(spell)&.id,
        attack_logic_id: find_attack_logic(spell)&.id,
        range_type_id: find_range_type(spell)&.id,
        element_id: find_element(spell)&.first&.id,
        created_at: Time.now,
        updated_at: Time.now
      },
      owner_references: spell_owners
    }
  end

  def find_spell_owners(spell)
    spell_owners = [
      find_grimo_by_tags(spell['tags']),
      find_role_by_tags(spell['tags']),
      find_specie_by_tags(spell['tags']),
      find_culture_by_tags(spell['tags'])
    ].flatten.compact

    return [] if spell_owners.blank?

    spell_owners
  end

  def spell_type(spell)
    return 'grimo' if find_grimo_by_tags(spell['tags']).present?
    return 'role' if find_role_by_tags(spell['tags']).present?
    return 'specie' if find_specie_by_tags(spell['tags']).present?
    return 'culture' if find_culture_by_tags(spell['tags']).present?
    return 'unknown'
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

  def find_attack_logic(spell)
    logic_map = {
      "Mágico" => "Mágica",
      "Físico" => "Física",
      "Ativa" => "Indefinida",
      "" => "Nenhuma",
      "Misto" => "Mista",
      "Mágica" => "Mágica",
      "Ritual" => "Mágica",
      "Aprimoramento" => "Indefinida",
      nil => "Nenhuma"
    }

    match = logic_map[spell['attack_logic']]
    return if match.blank?
    AttackLogic.find_by(title: match)
  end

  def find_range_type(spell)
    range_map = {
      "Alvo" => "Alvo",
      "Sí mesmo" => "Sí mesmo",
      "Misto" => "Misto",
      "Centro" => "Circular",
      "Ponto" => "Ponto",
      "Área" => "Área",
      "Alvo/Área" => "Misto",
      "Linha" => "Linha",
      "Objeto" => "Alvo",
      "Si mesmo" => "Sí mesmo",
      "" => "Nenhum",
      nil => "Nenhum",
      "Corpo-a-Corpo" => "Corpo-a-Corpo",
      "Corpo-a-corpo" => "Corpo-a-Corpo",
      "Circular" => "Circular",
      "Global" => "Global",
      "1" => "Alvo",
      "Círculo" => "Circular",
      "Area" => "Área",
      "Pontos" => "Ponto",
      "Cone" => "Cone",
    }

    match = range_map[spell['range_type']]
    return if match.blank?
    RangeType.find_by(title: match)
  end

  def find_element(spell)
    Element.where(permalink: spell['element']).presence || Element.where(permalink: "none")
  end

  def find_role_by_tags(tags)
    strings = (CharacterRole.all.map(&:permalink).map { |perma| perma.split('-').last } & tags)
    return if strings.blank?
    CharacterRole.where(permalink: strings)
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
    Culture.where(permalink: permalink_map[match_cultures[0]])
  end

  def find_specie_by_tags(tags)
    strings = (Specie.all.map(&:permalink).map { |perma| perma.split('-').last } & tags)
    return if strings.blank?
    Specie.where(permalink: strings)
  end

  def find_grimo_by_tags(tags)
    strings = (Grimo.all.map(&:permalink).map { |perma| perma.split('-').last } & tags)
    return if strings.blank?

    like_conditions = strings.map { |string| "permalink LIKE ?" }.join(' OR ')
    values = strings.map { |string| "%#{string}%" }

    Grimo.where(like_conditions, *values)
  end
end

 # get_spells.map do |spell|
    #   object = find_object(spell)
    #   {
    #     book_url: object&.book_url || nil,
    #     cast_distance: spell["cast_distance"],
    #     cast_distance_number: spell["cast_distance"],
    #     duration_time: spell["duration_time"],
    #     duration_time_number: spell["duration_time"],
    #     icon: spell["icon"],
    #     long_description: spell["description"],
    #     magic_cost: spell["magic_cost"],
    #     magic_cost_number: spell["magic_cost"],
    #     permalink: spell["id"],
    #     range_amount: spell["range_amount"],
    #     sacrifice: (spell["tags"] || []).include?("sacrifice"),
    #     short_description: spell["caption"],
    #     tags: (spell["tags"] || []).join(","),
    #     title: spell["name"],
    #     ultimate: (spell["tags"] || []).include?("ultimate"),
    #     external_id: spell["id"],
    #     tier: spell["tier"],
    #     action_type_id: find_action_type(spell)&.id,
    #     attack_logic_id: find_attack_logic(spell)&.id,
    #     range_type_id: find_range_type(spell)&.id,
    #     element_id: find_element(spell)&.id,
    #     created_at: Time.now,
    #     updated_at: Time.now
    #   }
    # end
