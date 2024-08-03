import { useRef, useEffect, useState, createContext } from 'react'
import DiceBox from '@3d-dice/dice-box';
import DiceRollModal from '../layouts/dice_roll';
import classNames from 'classnames';

export const DiceRollerContext = createContext(0);

export function DiceRollerProvider ({ children, themeColor = '#000000' }) {
  const diceBoxRef = useRef(null);
  const [rollText, setRollText] = useState(null);
  const containerRef = useRef(null);
  const [lastRoll, setLastRoll] = useState(null)
  const [bestRoll, setBestRoll] = useState(null)
  const [modifiers, setModifiers] = useState(null)
  const [diceArenaVisibility, setDiceArenaVisibility] = useState(false)
  const [resultModalVisibility, setResultModalVisibility] = useState(false)

  useEffect(() => {
    async function loadDiceBox () {
      diceBoxRef.current = new DiceBox("#dice-arena", {
        container: containerRef.current,
        assetPath: '/dice-box/',
        themeColor: themeColor,
        gravity: 20,
        scale: 7,
      });
      await diceBoxRef.current.init();
    }
    if (!diceBoxRef.current) {
      loadDiceBox()
    }
  }, [diceBoxRef]);

  async function rollDice ({formula, theme = '', modifiers}) {
    if (diceBoxRef.current) {
      setDiceArenaVisibility(true)
      setLastRoll(null)
      setResultModalVisibility(false)
      const response = await diceBoxRef.current.roll(formula, theme);
      setResultModalVisibility(true)
      setModifiers(modifiers)
      setLastRoll(response)

      const rollsArray = response.filter(roll => roll.sides == 20).map(roll => roll.value).sort((r1, r2) => r2 - r1)
      const highestRoll = rollsArray[0]
      const lowestRoll = rollsArray[1]

      if (lowestRoll == 20) { // Logo, o HighestRoll também foi 20
        setRollText({
          value: 'Sua ação será um TRIUNFO ÉPICO!',
          type: 'epic_triumph'
        })
        setBestRoll('20')
        return
      }

      if (highestRoll == 1) { // Logo, o LowestRoll também foi 1
        setRollText({
          value: "Sua ação será um DESASTRE ÉPICO!",
          type: 'epic_disaster'
        })
        setBestRoll('1')
        return
      }

      if (highestRoll == lowestRoll) {
        setRollText({
          value: "Tirar números iguais resultam em falha automática.",
          type: 'regular_failure'
        })
        setBestRoll('X')
        return
      }

      if (highestRoll == 20 && lowestRoll == 1) {
        setRollText({
          value: "Triunfo sempre anula desastre. Falha comum.",
          type: 'regular_failure'
        })
        setBestRoll('X')
        return
      }

      if (highestRoll == 1 || lowestRoll == 1) {
        setRollText({
          value: "Ah não! Sua ação foi um DESASTRE!",
          type: 'disaster'
        })
        setBestRoll('1')
        return
      }

      if (highestRoll == 20 || lowestRoll == 20) {
        setRollText({
          value: "Incrível! Sua ação foi TRIUNFANTE!",
          type: 'triumph'
        })
        setBestRoll('20')
        return
      }

      setBestRoll(`${highestRoll}`)
      setRollText(null)
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
        className={classNames('border fixed left-0 top-0 flex border-black w-full h-full', {
          'pointer-events-none': !resultModalVisibility,
          'opacity-0': !diceArenaVisibility
        })}
      >
        {resultModalVisibility && (
          <DiceRollModal
            visible={resultModalVisibility}
            specialText={rollText}
            roll={{
              modifiers,
              bestRoll,
              rolls: lastRoll
            }}
            onClose={e => {
              console.log("close")
              setResultModalVisibility(false)
              setDiceArenaVisibility(false)
            }}
          />
        )}
      </div>
    </DiceRollerContext.Provider>
  );
};
