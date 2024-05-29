import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import * as Icons from 'react-icons/gi'

export default function SpellRoll20({ spell }) {
  const title = 'Poderes'
  const Icon = Icons[spell.icon]

  return (
    <div className="break-inside-avoid pb-2">
      <h5
        className="block text-white text-2xl font-bold font-serif pt-3 py-2 screen:text-black rounded-lg"
      >
        {spell.title}
      </h5>

      <div className='text-sm gap-3 md:gap-3 border-gunmetal border rounded-lg'>
        <div key={spell.id} className={classNames('border screen:border-transparent p-3 rounded-xl drop-shadow-2xl text-black bg-white screen:bg-transparent')}>
          <p>
            Custo: {spell.magic_cost ? spell.magic_cost : "-"} |
            Alcance: {spell.range_type.title}
          </p>
          <p
            className='mt-3 screen:bg-transparent border border-black bg-emerald-100 screen:border-black screen:border text-black p-3 rounded-lg'
            dangerouslySetInnerHTML={{ __html: spell.short_description }}
          />
          <div
            className='mt-3'
            dangerouslySetInnerHTML={{ __html: spell.long_description }}
          />
        </div>
      </div>
    </div>
  )
}
