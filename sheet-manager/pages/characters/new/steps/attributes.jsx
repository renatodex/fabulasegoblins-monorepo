import React, { useState, useContext } from 'react';
import Container from '@/pages/components/container';
import { motion } from 'framer-motion';
import { Title } from '@/pages/components/title';
import Button from '@/pages/components/button';
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context';
import { FaTimes } from 'react-icons/fa';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isTouchDevice } from 'react-device-detect';
import { GiStrong } from 'react-icons/gi';
import { GiRunningNinja } from 'react-icons/gi';
import { GiShield } from 'react-icons/gi';
import { GiBrain } from 'react-icons/gi';
import { GiInnerSelf } from 'react-icons/gi';
import { GiMagicSwirl } from 'react-icons/gi';
import { GiConversation } from 'react-icons/gi';
import { GiSprint } from 'react-icons/gi';
import { GiCrystalBall } from 'react-icons/gi';


const ItemTypes = {
  MODIFIER: 'modifier',
};

const icons = {
  'Força': <GiStrong />,
  'Agilidade': <GiRunningNinja />,
  'Resiliência': <GiShield />,
  'Intelecto': <GiBrain />,
  'Espírito': <GiInnerSelf />,
  'Elo Mágico': <GiMagicSwirl />,
  'Influência': <GiConversation />,
  'Sobrevivência': <GiSprint />,
  'Destino': <GiCrystalBall />
};

const Modifier = ({ id, value, isSelected, isUsed, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.MODIFIER,
    item: { id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: !isUsed, // Disable dragging if the modifier is used
  }), [id, value, isUsed]);

  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent default touch behavior
    if (!isUsed) {
      onClick();
    }
  };

  return (
    <div
      ref={isTouchDevice ? null : drag}
      className={`border-green-300 font-bold border text-center rounded-full w-12 h-12 leading-[3rem] cursor-pointer ${isSelected ? 'bg-green-300' : ''} ${isUsed ? 'opacity-20 cursor-not-allowed' : ''}`}
      onClick={isTouchDevice ? () => !isUsed && onClick() : null}
      onTouchStart={handleTouchStart}
    >
      {value}
    </div>
  );
};

const AttributeBox = ({ attribute, character, setCharacter, selectedModifier, setSelectedModifier, appliedModifiers, setAppliedModifiers }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.MODIFIER,
    drop: (item) => {
      // Reset previous modifier if it exists
      const previousModifierId = Object.keys(appliedModifiers).find(id => appliedModifiers[id] === attribute);
      if (previousModifierId) {
        setAppliedModifiers((prev) => {
          const newAppliedModifiers = { ...prev };
          delete newAppliedModifiers[previousModifierId];
          return newAppliedModifiers;
        });
      }

      setCharacter((prev) => ({
        ...prev,
        [attribute]: item.value,
      }));
      setAppliedModifiers((prev) => ({
        ...prev,
        [item.id]: attribute,
      }));
      setSelectedModifier(null); // Unselect the modifier after applying it
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }), [attribute, appliedModifiers, setCharacter, setAppliedModifiers, setSelectedModifier]);

  const handleAttributeClick = () => {
    if (selectedModifier !== null) {
      // Reset previous modifier if it exists
      const previousModifierId = Object.keys(appliedModifiers).find(id => appliedModifiers[id] === attribute);
      if (previousModifierId) {
        setAppliedModifiers((prev) => {
          const newAppliedModifiers = { ...prev };
          delete newAppliedModifiers[previousModifierId];
          return newAppliedModifiers;
        });
      }

      setCharacter((prev) => ({
        ...prev,
        [attribute]: selectedModifier.value,
      }));
      setAppliedModifiers((prev) => ({
        ...prev,
        [selectedModifier.id]: attribute,
      }));
      setSelectedModifier(null); // Unselect the modifier after applying it
    }
  };

  const handleResetClick = () => {
    const modifierId = Object.keys(appliedModifiers).find(id => appliedModifiers[id] === attribute);
    if (modifierId) {
      setCharacter((prev) => ({
        ...prev,
        [attribute]: 0,
      }));
      setAppliedModifiers((prev) => {
        const newAppliedModifiers = { ...prev };
        delete newAppliedModifiers[modifierId];
        return newAppliedModifiers;
      });
    }
  };

  const isModifierApplied = Object.values(appliedModifiers).includes(attribute);

  return (
    <div className='relative'>
      <div
        ref={drop}
        onClick={handleAttributeClick}
        className={`w-34 h-20 rounded border border-green-300 mt-2 leading-[4.8rem] text-center text-5xl cursor-pointer ${isOver ? 'bg-green-100' : ''}`}
      >
        {character[attribute] || 0}
      </div>
      {isModifierApplied && (
        <div className=''>
          <FaTimes
            onClick={handleResetClick}
            className='absolute top-2 right-2 cursor-pointer text-3xl text-green-300'
          />
        </div>
      )}
    </div>
  );
};

export default function Attributes({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext);
  const [selectedModifier, setSelectedModifier] = useState(null);
  const [appliedModifiers, setAppliedModifiers] = useState({});

  const modifiers = [
    { id: 1, value: +2 },
    { id: 2, value: +1 },
    { id: 3, value: +1 },
    { id: 4, value: +1 },
    { id: 5, value: -1 },
    { id: 6, value: -1 },
  ];

  const attributes = [
    'Força', 'Agilidade', 'Resiliência', 'Intelecto', 'Espírito', 'Elo Mágico', 'Influência', 'Sobrevivência', 'Destino'
  ];

  const handleModifierClick = (modifier) => {
    setSelectedModifier((prev) => (prev && prev.id === modifier.id ? null : modifier)); // Toggle selection
  };

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
      >
        <Container>
          <Title>Distribua seus Atributos</Title>

          <div className='flex gap-3 mt-7'>
            {modifiers.map((modifier) => (
              <Modifier
                key={modifier.id}
                id={modifier.id}
                value={modifier.value}
                isSelected={selectedModifier && selectedModifier.id === modifier.id}
                isUsed={appliedModifiers[modifier.id] !== undefined}
                onClick={() => handleModifierClick(modifier)}
              />
            ))}
          </div>

          <div className='grid grid-cols-2 gap-4 mt-10'>
            {attributes.map((attribute) => (
              <div key={attribute}>
                <div className='text-2xl'>
                  <span className='inline-block'>{icons[attribute]}</span> {attribute}
                </div>
                <AttributeBox
                  attribute={attribute}
                  character={character}
                  setCharacter={setCharacter}
                  selectedModifier={selectedModifier}
                  setSelectedModifier={setSelectedModifier}
                  appliedModifiers={appliedModifiers}
                  setAppliedModifiers={setAppliedModifiers}
                />
              </div>
            ))}
          </div>

          <div className='mt-7'>
            <Button onClick={(e) => {
              setSubViewVisibility(false);
              setParentViewVisibility(true);
              setCharacter({
                ...character,
                grimo: selectedGrimo,
              });
            }}>
              Próximo
            </Button>
          </div>
        </Container>
      </motion.div>
    </DndProvider>
  );
}
