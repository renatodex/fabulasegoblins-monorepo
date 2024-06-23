import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import * as Icons from 'react-icons/gi/index.js'

export default function Spell({ spell }) {
  const title = 'Poderes'
  const Icon = Icons[spell.icon]

  return (
    <div className="break-inside-avoid pb-8 pt-2">
      <h5
        className="block text-white text-2xl font-bold font-serif pt-3 px-4 py-2 bg-[#0e1818] screen:text-black rounded-t-lg"
      >
        <div className='screen:hidden sm:block md:inline-block text-center'>
          <div className='screen:hidden text-3xl min-h-[45px] min-w-[45px] text-center inline-block bg-black p-2 rounded-full mr-3 align-middle'>
            <Icon />
          </div>
        </div>
        {spell.title}
      </h5>

      <div className='text-sm gap-3 md:gap-3 border-gunmetal border'>
        <div key={spell.id} className={classNames('border screen:border-transparent px-4 py-3 rounded-b-xl drop-shadow-2xl text-black bg-white screen:bg-transparent')}>
          <div className='flex  gap-3'>
            <div className='px-2 py-1 border border-black bg-gray-300 rounded-lg screen:bg-transparent screen:border-black screen:border'>
              Custo: {spell.magic_cost ? spell.magic_cost : "-"}
            </div>
            <div className='px-2 py-1 border border-black bg-gray-300 rounded-lg screen:bg-transparent screen:border-black screen:border'>
              Alcance: {spell.range_type.title}
            </div>
          </div>
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
