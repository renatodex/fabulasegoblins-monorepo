import React, { useState } from 'react'
import classNames from 'classnames'
import * as Icons from 'react-icons/gi'
import { LuChevronUpCircle, LuChevronDownCircle } from "react-icons/lu";

export default function Spell({ spell, defaultCollapse = false }) {
  const title = 'Poderes'
  const Icon = Icons[spell.icon]

  console.log("spell", spell, defaultCollapse, useState)
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapse)

  return (
    <div className="break-inside-avoid relative mt-4">
      <div
        className="block text-white text-2xl pt-3 px-4 py-4 bg-[#0e1818] screen:text-black rounded-xl"
      >
        <div onPointerUp={e => setIsCollapsed(!isCollapsed)}>
          <div className='screen:hidden sm:block text-center'>
            <div className='absolute screen:hidden flex justify-center items-center text-xl top-[-18px] left-[calc(50%-18px)] min-h-[35px] min-w-[35px] text-center inline-block bg-black rounded-full mr-3 align-middle'>
              <Icon />
            </div>
          </div>
          <div className='flex pt-4 md:pt-0'>
            <h4 className='font-bold text-base font-serif self-center flex-1'>{spell.title}</h4>
            <button className='text-3xl self-center rounded-full'>
              {isCollapsed ? <LuChevronUpCircle /> : <LuChevronDownCircle />}
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <div className='text-sm gap-3 md:gap-3 mt-3'>
            <div key={spell.id} className={classNames('border screen:border-transparent px-4 py-3 rounded-xl drop-shadow-2xl text-black bg-white screen:bg-transparent')}>
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
        )}
      </div>
    </div>
  )
}
