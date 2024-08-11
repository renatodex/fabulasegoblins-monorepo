import { AppModalContent } from "../contexts/app_modal"
import { useState } from 'react'
import Button from "../components/button"
import { IoMdArrowRoundForward } from "react-icons/io";
import classNames from "classnames";

export function ChangeResourceModal({
  modalLabel = "Mudar Recursos",
  label,
  currentPoints,
  maxPoints,
  setModalContent,
  onSubmit,
}) {
  const [diffPoints, setDiffPoints] = useState(0)

  const targetPoints = Math.max(0, Math.min(currentPoints + diffPoints, maxPoints));

  const resourcePercentage = targetPoints*100/maxPoints

  return (
    <AppModalContent title={modalLabel}>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit(targetPoints)
      }}>
        <div className='mt-3 text-white'>
          <div className='flex px-1'>
            <p className='flex-1 text-left font-serif'>{label}</p>
            <p className='font-serif text-aero-blue'>{currentPoints} / {maxPoints}</p>
          </div>

          <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5 mt-1'>
            <div className='h-full bg-aero-blue rounded-xl' style={{ width: `${currentPoints*100/maxPoints}%` }} />
          </div>
        </div>

        <div className="mt-4 border border-lavender-blue rounded-xl">
          <div className="text-white p-4 bg-slate-800 rounded-t-xl border-b border-lavender-blue">
            Escolha o valor
          </div>
          <div className="p-4">
            <div className="flex gap-3 justify-center">
              <div>
                <Button buttonColors="bg-rose-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + -3)}}>-3</Button>
              </div>
              <div>
                <Button buttonColors="bg-rose-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + -5)}}>-5</Button>
              </div>
              <div>
                <Button buttonColors="bg-rose-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + -10)}}>-10</Button>
              </div>
              <div>
                <Button buttonColors="bg-blue-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + 3)}}>+3</Button>
              </div>
              <div>
                <Button buttonColors="bg-blue-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + 5)}}>+5</Button>
              </div>
              <div>
                <Button buttonColors="bg-blue-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + 10)}}>+10</Button>
              </div>
            </div>

            <div className="m-auto text-center items-center flex mt-4 gap-3">
              <div className="flex-1 self-center">
                <Button buttonColors="bg-rose-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints - 1)}}>-</Button>
              </div>
              <input
                className="inline-block self-center p-2 font-bold border border-black text-center bg-white rounded-lg"
                type="number"
                value={diffPoints}
                onChange={e => setDiffPoints(parseInt(e.target.value))}
              />
              <div className="flex-1">
                <Button buttonColors="bg-blue-300 text-dark-charcoal disabled:bg-gray-200 disabled:text-gray-600" onClick={e => {setDiffPoints(diffPoints + 1)}}>+</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4 text-white border border-lavender-blue rounded-xl p-4">
          <div className="flex-1">
            <div>
              Atual ({currentPoints}/{maxPoints})
            </div>
            <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5 mt-1'>
              <div className='h-full bg-aero-blue rounded-xl' style={{ width: `${(currentPoints)*100/maxPoints}%` }} />
            </div>
          </div>

          <div className="self-center pt-6">
            <IoMdArrowRoundForward />
          </div>

          <div className="flex-1 opacity-50">
            <div>
              Depois ({targetPoints}/{maxPoints})
            </div>
            <div className='h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5 mt-1'>
              <div
                className={classNames('h-full rounded-xl', {
                  'bg-aero-blue': resourcePercentage >= 60,
                  'bg-orange-300': resourcePercentage >= 35 && resourcePercentage <= 60,
                  'bg-rose-300': resourcePercentage <= 35
                })}
                style={{ width: `${resourcePercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button type="submit">Confirmar</Button>
        </div>
      </form>
    </AppModalContent>
  )
}
