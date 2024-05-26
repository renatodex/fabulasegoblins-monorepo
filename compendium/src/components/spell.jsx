import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import * as Icons from 'react-icons/gi'

export default function Spell({ spell }) {
  const title = 'Poderes'
  const Icon = Icons[spell.icon]

  return (
    <div className="break-inside-avoid pb-8 pt-2">
      <h3
        className="text-4xl font-bold font-serif pt-3 px-4 print:text-black"
        style={{
          textShadow: 'black -4px 1px 3px, black 1px -1px 0px, black -1px 1px 0px, black 1px 1px 0px',
          background: 'transparent',
        }}
      >
        <div className='print:hidden sm:block md:inline-block scale-150 text-center mb-5 md:mr-3'>
          <div className='print:hidden text-3xl min-h-[45px] min-w-[45px] text-center inline-block bg-black p-2 rounded-full mr-3 align-middle'>
            <Icon />
          </div>
        </div>
        {spell.title}
      </h3>

      <div className='mt-5 text-sm gap-3 md:gap-3 rounded-lg border-gunmetal border'>
        <div key={spell.id} className={classNames('border print:border-transparent p-4 rounded-xl drop-shadow-2xl text-black bg-white print:bg-transparent')}>
          <div className='grid grid-cols-3 sm:grid-cols-4 gap-3'>
          <div className='px-2 py-1 bg-gray-300 rounded-lg print:bg-transparent print:border-black print:border'>
              Custo: {spell.magic_cost ? spell.magic_cost : "-"}
            </div>
            <div className='px-2 py-1 bg-gray-300 rounded-lg print:bg-transparent print:border-black print:border'>
              Alcance: {spell.range_type.title}
            </div>
          </div>
          <p
            className='mt-3 print:bg-transparent bg-emerald-100 print:border-black print:border text-black p-3 rounded-lg'
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
