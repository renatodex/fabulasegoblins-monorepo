# == Schema Information
#
# Table name: negative_effects
#
#  id                :bigint           not null, primary key
#  title             :string
#  short_description :text
#  long_description  :text
#  permalink         :string
#  book_url          :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class NegativeEffect < ApplicationRecord
  class << self
    def poison
      find_by_permalink("poison")
    end

    def burn
      find_by_permalink("burn")
    end

    def control
      find_by_permalink("control")
    end

    def constrict
      find_by_permalink("constrict")
    end

    def corrode
      find_by_permalink("corrode")
    end

    def exhaust
      find_by_permalink("exhaust")
    end

    def terror
      find_by_permalink("terror")
    end

    def freeze
      find_by_permalink("freeze")
    end

    def push
      find_by_permalink("push")
    end

    def paralize
      find_by_permalink("paralize")
    end

    def haziness
      find_by_permalink("haziness")
    end

    def silence
      find_by_permalink("silence")
    end

    def slow
      find_by_permalink("slow")
    end

    def stun
      find_by_permalink("stun")
    end

    def blind
      find_by_permalink("blind")
    end

    def petrify
      find_by_permalink("petrify")
    end

    def sleep
      find_by_permalink("sleep")
    end

    def purge
      find_by_permalink("purge")
    end

    def knock
      find_by_permalink("knock")
    end
  end
end
