class Api::ItemsController < ApiController
  def resource
    Item
  end

  def queryable_resource
    Item.includes(:sheet_attributes)
  end
end
