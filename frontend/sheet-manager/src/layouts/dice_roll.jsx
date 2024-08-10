import { IoMdCloseCircle } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import classNames from "classnames";

export default function DiceRollModal ({ onClose, roll, specialText, visible }) {
  if (!visible) return null;

  const breakdown = [
    {
      value: roll.bestRoll,
      description: 'Maior resultado no dado.',
      inlineText: 'maior valor',
      neutralValue: true,
    },
    ...roll.modifiers
  ]

  const specialColorMap = {
    'triumph': 'bg-[#3f9226]',
    'disaster': 'bg-[#000000]',
    'regular_failure': 'bg-[#4B5F66]',
    'epic_triumph': 'bg-[#DD29AB]',
    'epic_disaster': 'bg-[#FF0000]',
  }

  const specialColorMapGradient = {
    'triumph': 'to-[#3f9226]',
    'disaster': 'to-[#000000]',
    'regular_failure': 'to-[#4B5F66]',
    'epic_triumph': 'to-[#DD29AB]',
    'epic_disaster': 'to-[#FF0000]',
  }

  const calculatedFinalRoll = [
    {
      value: parseInt(roll.bestRoll),
    },
    ...roll.modifiers
  ].reduce((a,b) => parseInt(a.value) + parseInt(b.value))

  return (
    <div className='z-20 fixed bg-black/70 h-full w-full' onClick={e => {
      console.log("Clicked")
      e.stopPropagation()
      onClose()
    }}>
      <div className='z-20 fixed text-white -translate-x-2/4 -translate-y-2/4 w-[300px] left-1/2 top-1/2' onClick={e => {
        e.stopPropagation();
      }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className={classNames('border shadow-xl rounded-2xl p-6 bg-gradient-to-b from-[rgba(30,56,124,0.7)]', {
            'to-[rgba(55,102,226,1)]': !specialText,
            [specialColorMapGradient[specialText?.type]]: specialText
          })}>
            <div className='text-3xl flex justify-between'>
              <span className='font-dolly-bold'>Rolagem</span>
              <IoMdCloseCircle onClick={onClose} className='inline-block' />
            </div>
            <div>
              <div className="relative w-44 h-44 m-auto mt-4">
              <div className="absolute flex top-0 opacity-20 left-[-8px] w-48 h-48 bg-black clip-hexagon rotate-[30deg]"></div>
                <div className="absolute top-[-8px] left-[-8px] w-48 h-48 bg-black clip-hexagon rotate-[30deg]">
                </div>
                <div className={classNames(`absolute top-0 left-0 w-44 h-44 bg-white clip-hexagon rotate-[30deg]`, {
                  'bg-white': specialText,
                })}>
                </div>
                <p className="absolute left-0 top-[40px] font-adobe-kis font-black w-full text-center text-8xl text-black">
                  {specialText ? roll.bestRoll : calculatedFinalRoll}
                </p>
              </div>

              <div className="mt-4">
                <label>Resultado:</label>
                <div className={classNames("border border-black p-2 px-2 rounded-lg", {
                  'bg-gunmetal': !specialText,
                  [specialColorMap[specialText?.type]]: specialText,
                })}>
                  {specialText ? (
                    (
                      <div className="font-dolly-bold">
                        {specialText.value}
                      </div>
                    )
                  ) : (
                    <div className="flex gap-2">
                      {breakdown.map(breakdownBlock => {
                        return (
                          <p key={crypto.randomUUID()} className="border border-gray-400 text-lg inline-block text-white bg-gray-700 rounded-lg px-2" alt={breakdownBlock.description}>
                            {breakdownBlock.value < 0 || breakdownBlock.neutralValue ? breakdownBlock.value : `+${breakdownBlock.value}`}
                            {breakdownBlock.inlineText && (<>{' '}({breakdownBlock.inlineText})</>)}
                          </p>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
