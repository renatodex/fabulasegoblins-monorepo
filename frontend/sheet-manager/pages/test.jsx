import { useRef, useEffect, useState, useContext, createContext } from 'react'
import DiceBox from '@3d-dice/dice-box';

export const DiceRollerContext = createContext(0);

export function DiceRollerProvider ({ children }) {
  const diceBoxRef = useRef(null);
  const [rollText, setRollText] = useState(null);
  const containerRef = useRef(null);
  const [lastRoll, setLastRoll] = useState(null)

  useEffect(() => {
    async function loadDiceBox () {
      diceBoxRef.current = new DiceBox("#dice-arena", {
        container: containerRef.current,
        assetPath: '/dice-box/',
        gravity: 20,
        scale: 7,
      });
      await diceBoxRef.current.init();
    }
    if (!diceBoxRef.current) {
      loadDiceBox()
    }
  }, [diceBoxRef]);

  async function rollDice ({formula, theme = ''}) {
    if (diceBoxRef.current) {
      setLastRoll(null)
      const response = await diceBoxRef.current.roll(formula, theme);
      setLastRoll(response)
      console.log(response)


      const rollsArray = response.filter(roll => roll.sides == 20).map(roll => roll.value).sort((r1, r2) => r2 - r1)
      const highestRoll = rollsArray[0]
      const lowestRoll = rollsArray[1]

      if (lowestRoll == 20) { // Logo, o HighestRoll também foi 20
        setRollText("Sua ação será um TRIUNFO ÉPICO!")
        return
      }

      if (highestRoll == 1) { // Logo, o LowestRoll também foi 1
        setRollText("Sua ação será um DESASTRE ÉPICO!")
        return
      }

      if (highestRoll == lowestRoll) {
        setRollText("Você tirou números iguais e falhou.")
        return
      }

      if (highestRoll == 20 && lowestRoll == 1) {
        setRollText("Você teve uma falha comum.")
        return
      }

      if (highestRoll == 1 || lowestRoll == 1) {
        setRollText("Sua ação será um DESASTRE!")
        return
      }

      if (highestRoll == 20 || lowestRoll == 20) {
        setRollText("Sua ação será um TRIUNFO!")
        return
      }

      setRollText(`Seu maior número foi ${highestRoll}`)
    }
  };

  return (
    <DiceRollerContext.Provider value={{ rollDice }}>
      <div>
        {children}
      </div>
      <div
        id="dice-arena"
        ref={containerRef}
        className='border fixed pointer-events-none left-0 top-0 flex border-black w-full h-full'
      >
        {lastRoll && (
          <div className='font-bold absolute self-center flex justify-center left-[calc(50%-150px)] w-[300px] text-center h-12 rounded-xl shadow-xl border border-red bg-red-200 text-black'>
            <p className='self-center'>{rollText}</p>
          </div>
        )}
      </div>
    </DiceRollerContext.Provider>
  );
};

export function View () {
  const { rollDice } = useContext(DiceRollerContext)

  return (
    <div>
      <a href="#" onClick={e => {
        console.log("Teste", rollDice)
        rollDice({ formula: ['2d20', '1d4'] })}
      }>Roll 2d20</a>
    </div>
  )
}

export default function Test () {
  return (
    <div>
      <div className='App'>
        <DiceRollerProvider>
          <View></View>
        </DiceRollerProvider>
      </div>
    </div>
  )
}
