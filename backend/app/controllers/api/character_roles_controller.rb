class Api::CharacterRolesController < ApiController
  def resource
    CharacterRole
  end

  def queryable_resource
    CharacterRole.includes([:sheet_attributes, spells: [:range_type]])
  end
end
