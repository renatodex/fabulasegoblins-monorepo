import { AppModalContent } from "../contexts/app_modal"
import { useState } from 'react'
import Button from "../components/button"
import { IoMdArrowRoundForward } from "react-icons/io";
import classNames from "classnames";

export function ChangeResourceModal({
  label,
  currentPoints,
  maxPoints,
  setModalContent
}) {
  const [diffPoints, setDiffPoints] = useState(0)

  const targetPoints = Math.min(currentPoints + diffPoints, maxPoints)
  const resourcePercentage = targetPoints*100/maxPoints

  console.log("Targeet", targetPoints)

  return (
    <AppModalContent title={"Mudar Recursos"}>
      <div className='mt-3 text-white'>
        <div className='flex px-1'>
          <p className='flex-1 text-left font-serif'>{label}</p>
          <p className='font-serif text-aero-blue'>{currentPoints} / {maxPoints}</p>
        </div>

        <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5 mt-1'>
          <div className='h-full bg-aero-blue rounded-xl' style={{ width: `${currentPoints*100/maxPoints}%` }} />
        </div>
      </div>

      <div className="mt-4 flex gap-3 justify-center">
        <div>
          <Button onClick={e => {setDiffPoints(-1)}}>-1</Button>
        </div>
        <div>
          <Button onClick={e => {setDiffPoints(-5)}}>-5</Button>
        </div>
        <div>
          <Button onClick={e => {setDiffPoints(-10)}}>-10</Button>
        </div>
        <div>
          <Button onClick={e => {setDiffPoints(-10)}}>+X/-X</Button>
          {/* <input
            className="inline-block h-20 font-bold text-center bg-aero-blue rounded-lg"
            type="number"
            value={diffPoints}
            onChange={e => setDiffPoints(e.target.value)}
          /> */}
        </div>
      </div>

      <div className="m-auto text-center">
        <input
          className="inline-block p-2 font-bold mt-4 border border-black text-center bg-white rounded-lg"
          type="number"
          value={diffPoints}
          onChange={e => setDiffPoints(parseInt(e.target.value))}
        />
      </div>

      <div className="mt-4 flex gap-4 text-white border rounded-xl p-4">
        <div className="flex-1">
          <div>
            Atual
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
            Depois
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
        <Button>Confirmar</Button>
      </div>
    </AppModalContent>
  )
}
