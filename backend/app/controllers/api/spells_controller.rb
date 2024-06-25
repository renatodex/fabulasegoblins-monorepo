class Api::SpellsController < ApiController
  def resource
    Spell
  end

  def index
    ensure_resource

    cache_key = "#{params[:q].to_s.parameterize}_#{params[:page].presence || 0}"

    data = Rails.cache.fetch(cache_key, expires_in: 30.minutes) do
      spells = Spell
                .includes([:spell_owners, :range_type])
                .order([:tier, :title])
                .ransack(params[:q])
                .result
                .page(params[:page].presence || 0)
                .per(RECORDS_PER_PAGE)
      {
        spells: spells.as_json(include: [:spell_owners, :range_type]),
        total_count: spells.total_count,
        last_page: spells.last_page?
      }
    end

    response.set_header('X-Total', data[:total_count])
    response.set_header('X-Pages', (data[:total_count].to_f / RECORDS_PER_PAGE).ceil)
    response.set_header('X-LastPage', data[:last_page])

    render json: data[:spells], status: :ok
  end
end
