import React, { useState, useContext, useEffect } from 'react';
import Container from '@/pages/components/container';
import { motion } from 'framer-motion';
import { Title } from '@/pages/components/title';
import Button from '@/pages/components/button';
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context';
import { FaTimes } from 'react-icons/fa/index.js';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isTouchDevice } from 'react-device-detect';
import { GiStrong, GiRunningNinja, GiShield, GiBrain, GiInnerSelf, GiMagicSwirl, GiConversation, GiSprint, GiCrystalBall } from 'react-icons/gi/index.js';

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

const attributeMap = {
  'Força': 'base_strength',
  'Agilidade': 'base_agility',
  'Resiliência': 'base_resilience',
  'Intelecto': 'base_intelect',
  'Espírito': 'base_spirit',
  'Elo Mágico': 'base_magic_elo',
  'Influência': 'base_influence',
  'Sobrevivência': 'base_survival',
  'Destino': 'base_destiny'
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

const AttributeBox = ({ attribute, selectedModifier, characterAttributes, setCharacterAttributes, setSelectedModifier, appliedModifiers, setAppliedModifiers }) => {
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

      setCharacterAttributes((prev) => ({
        ...prev,
        [attributeMap[attribute]]: item.value,
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
  }), [attribute, appliedModifiers, setCharacterAttributes, setAppliedModifiers, setSelectedModifier]);

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

      setCharacterAttributes((prev) => ({
        ...prev,
        [attributeMap[attribute]]: selectedModifier.value,
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
      setCharacterAttributes((prev) => ({
        ...prev,
        [attributeMap[attribute]]: 0,
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
        {characterAttributes[attributeMap[attribute]] || 0}
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
  const [appliedModifiers, setAppliedModifiers] = useState(character?.attributes?.appliedModifiers || {});
  const [characterAttributes, setCharacterAttributes] = useState({
    'base_strength': character?.attributes?.base_strength || 0,
    'base_agility': character?.attributes?.base_agility || 0,
    'base_resilience': character?.attributes?.base_resilience || 0,
    'base_intelect': character?.attributes?.base_intelect || 0,
    'base_spirit': character?.attributes?.base_spirit || 0,
    'base_magic_elo': character?.attributes?.base_magic_elo || 0,
    'base_influence': character?.attributes?.base_influence || 0,
    'base_survival': character?.attributes?.base_survival || 0,
    'base_destiny': character?.attributes?.base_destiny || 0,
  })

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

  const validateAttributes = function () {
    return Object.values(appliedModifiers).length == modifiers.length
  }

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
                  characterAttributes={characterAttributes}
                  setCharacterAttributes={setCharacterAttributes}
                  selectedModifier={selectedModifier}
                  setSelectedModifier={setSelectedModifier}
                  appliedModifiers={appliedModifiers}
                  setAppliedModifiers={setAppliedModifiers}
                />
              </div>
            ))}
          </div>

          <div className='mt-7'>
            {validateAttributes() ? (
              <Button onClick={() => {
                setSubViewVisibility(false);
                setParentViewVisibility(true);
                setCharacter({
                  ...character,
                  attributes: {
                    ...characterAttributes,
                    permalink: 'attributes',
                    appliedModifiers
                  },
                })
              }}>
                Próximo
              </Button>
            ) : (
              <Button disabled>
                ❕ Faltam ({modifiers.length - Object.values(appliedModifiers).length}) modificadores ❕
              </Button>
            )}
          </div>
        </Container>
      </motion.div>
    </DndProvider>
  );
}
