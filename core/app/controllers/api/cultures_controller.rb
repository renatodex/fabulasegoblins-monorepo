class Api::CulturesController < ApiController
  def resource
    Culture
  end

  def queryable_resource
    Culture.includes([spells: [:range_type]])
  end
end
