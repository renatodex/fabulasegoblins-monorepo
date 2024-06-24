class Api::SpeciesController < ApiController
  def resource
    Specie
  end

  def queryable_resource
    Specie.includes([spells: [:range_type]])
  end
end
