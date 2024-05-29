Ransack.configure do |config|
  config.add_predicate 'eq_any',
    arel_predicate: 'eq_any',
    formatter: proc { |v| v.split(',').map(&:strip) },
    validator: proc { |v| v.present? },
    type: :string
end
