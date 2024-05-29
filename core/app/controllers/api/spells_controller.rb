class Api::SpellsController < ApiController
  def resource
    Spell
  end

  def index
    ensure_resource
    data = Spell
            .includes(:spell_owners)
            .order([:tier, :title])
            .ransack(params[:q])
            .result
            .page(params[:page].presence || 0)
            .per(RECORDS_PER_PAGE)

    response.set_header('X-Total', data.total_count)
    response.set_header('X-Pages', data.total_count / RECORDS_PER_PAGE)
    response.set_header('X-LastPage', data.last_page?)

    render_or_fallback(data, 'index')
  end
end
