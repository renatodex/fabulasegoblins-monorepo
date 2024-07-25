import Container from "@/src/components/container"
import { motion } from "framer-motion"
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import { useContext, useState } from 'react'
import Button from "@/src/components/button"
import useLogin from "hooks/use_login"
import * as Icons from 'react-icons/gi'
import useScrollTop from "@/src/utilitaryHooks/use_scroll_top"
import Modal from 'react-modal';
import Title from "@/src/components/title"
import classNames from "classnames"

Modal.setAppElement("#modal")

export function CharacterSection ({
  label,
  subView,
  item,
  filledValue = function () { return '' },
  filledCheck = function () { return false },
  iconValue = null,
  onSectionClick
}) {
  let bg = null;

  const imgPath = `/${subView.toLowerCase()}/full/${item?.permalink}.jpg`
  if (item?.permalink && item?.permalink != 'default') {
    bg = { backgroundImage: `url('${imgPath}')` }
  }

  return (
    <div
      className="mt-5 rounded-3xl hover:bg-green-200 cursor-pointer text-black p-1 h-auto bg-cover bg-center"
      style={{
        boxShadow: '0px 6px 0px rgba(0,0,0,99)',
        backgroundColor: `${item?.color || '#ffffff'}`
      }}
      onClick={e => {
        onSectionClick(subView)
      }}
    >
      {filledCheck(item) ? (
        <div className="border border-dashed border-black rounded-3xl p-3">
          <div className="px-2 flex">
            {iconValue ? (
              <div
                className="relative w-20 h-20 flex justify-center items-center text-center text-5xl bg-cover border border-gray-500 rounded-full bg-gray-200"
                style={{
                  backgroundImage: `url('${imgPath}')`,
                }}
              >
                {iconValue()}
              </div>
            ) : (
              <div
                className="relative w-20 h-20 bg-cover border border-gray-500 rounded-full bg-gray-200"
                style={{
                  backgroundImage: `url('${imgPath}')`,
                }}
              >
                {/* <img src={imgPath} className="border border-black rounded-full w-20 h-20" /> */}
              </div>
            )}
            <div className="flex-1 ml-4">
              <p className="m-0 p-0 font-dolly-bold text-2xl">{label.split(' ')[1]}</p>
              <p className="m-0 p-0">
                {filledValue(item)}
              </p>
              <div className="m-0 p-0">
                <button className="bg-black rounded-2xl text-white px-3 py-0.5 text-sm border-0">alterar</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-dashed border-black rounded-3xl p-3">
          <div className="px-2 flex">
            <div className="flex items-center justify-center font-dolly-bold w-20 h-20 text-center rounded-full bg-slate-900 text-white p-3 text-5xl align-middle text-bold">
              ?
            </div>
            <div className="flex-1 ml-4">
              <p className="m-0 p-0 font-dolly-bold text-2xl">{label.split(' ')[1]}</p>
              <p className="m-0 p-0">Não definido</p>
              <div className="m-0 p-0">
                <button className="bg-black rounded-2xl text-white px-3 py-0.5 text-sm border-0">escolher</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function AvatarSelection ({ specie, onSelect }) {
  const [selected, setSelected] = useState(null)

  const avatarMap = {
    goblin: [1,2,3,4],
    razalan: [13, 14],
    luminin: [5,6,7,8],
    metaloide: [9,10,11],
    valdari: [21,22,23,24],
    armadon: [17,18]
  }

  if (!specie || specie === 'default') return null;

  return (
    <div className="grid grid-cols-3 gap-2">
      {avatarMap[specie].map(n => (
        <img
          onPointerUp={e => {
            setSelected(n)
            onSelect(n)
          }}
          className={classNames(`border border-black rounded-full h-20 w-20`, {
            'bg-green-400': n === selected,
            'border-black': n !== selected,
            'border-green-800': n === selected
          })}
          src={`/avatars/${specie}/${n}.png`}
        />
      ))}
    </div>
  )
}

export default function Overview ({ character, setCharacter = function () {} }) {
  const { setSubViewVisibility, setParentViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)
  const [showFinalizingModal, setShowFinalizingModal] = useState(false)

  const { token, ping } = useLogin()

  useScrollTop()

  const handleSubmit = function () {
    const characterData = {
      attributes: {
        base_agility: character?.attributes?.base_agility,
        base_destiny: character?.attributes?.base_destiny,
        base_influence: character?.attributes?.base_influence,
        base_intelect: character?.attributes?.base_intelect,
        base_magic_elo: character?.attributes?.base_magic_elo,
        base_resilience: character?.attributes?.base_resilience,
        base_spirit: character?.attributes?.base_spirit,
        base_strength: character?.attributes?.base_strength,
        base_survival: character?.attributes?.base_survival,
      },
      culture_id: character?.culture?.id,
      role_id: character?.role?.id,
      specie_id: character?.specie?.id,
      level: character?.level,
      grimo_id: character?.grimo?.id,
      spell_ids: [
        character?.spells?.map(s => s.id),
        character?.ultimate?.map(s => s.id)
      ].flat(),
      weapon_id: character?.weapon?.id,
      avatar: character?.avatar,
      character_name: character?.character_name,
    }

    return createCharacter(characterData)
  }

  async function createCharacter(characterData) {
    try {
      const response = await fetch('/api/characters/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the authorization header if required
        },
        body: JSON.stringify(characterData), // Convert characterData to JSON string
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      window.localStorage.removeItem('new_character_v1')

      const data = await response.json();

      window.location.href = `/characters/${data.code}`

      return data;
    } catch (error) {
      console.error('Failed to create character:', error);
      throw error;
    }
  }

  const validateChoices = function () {
    const validAttributes = [
      character?.attributes?.base_strength,
      character?.attributes?.base_agility,
      character?.attributes?.base_resilience,
      character?.attributes?.base_intelect,
      character?.attributes?.base_spirit,
      character?.attributes?.base_magic_elo,
      character?.attributes?.base_influence,
      character?.attributes?.base_survival,
      character?.attributes?.base_destiny,
    ].every(attr =>
      typeof attr === 'number' && (attr >= -2 && attr <= 2)
    )

    return (
      character?.role?.title &&
      character?.specie?.title &&
      character?.culture?.title &&
      character?.grimo?.title &&
      validAttributes &&
      character?.weapon?.title &&
      character?.spells?.length > 0 && character?.ultimate?.length > 0
    )
  }

  const onSectionClick = function (subView) {
    setParentViewVisibility(false)
    setSubViewVisibility(true)
    setSelectedSubView(subView)
  }

  let WeaponIcon

  if (character?.weapon?.icon) {
    WeaponIcon = Icons[character?.weapon?.icon]
  }

  return (
    <motion.div
      className="w-full"
      initial={{
        x: 0
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "-100%"
      }}
    >
      <Container>
        <Title>
          Criando seu Personagem
        </Title>

        <CharacterSection
          label={'a Espécie'}
          subView={'Species'}
          item={character?.specie}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Papel de Jogo'}
          subView={'Roles'}
          item={character?.role}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Cultura'}
          subView={'Cultures'}
          item={character?.culture}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Grimo'}
          subView={'Grimos'}
          item={character?.grimo}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Atributos'}
          subView={'Attributes'}
          item={character?.attributes}
          filledCheck={attributes =>
            [
              attributes?.base_strength,
              attributes?.base_agility,
              attributes?.base_resilience,
              attributes?.base_intelect,
              attributes?.base_spirit,
              attributes?.base_magic_elo,
              attributes?.base_influence,
              attributes?.base_survival,
              attributes?.base_destiny,
            ].every(attr =>
              typeof attr === 'number' && (attr >= -2 && attr <= 2)
            )
          }
          filledValue={attributes => `Clique para redefinir`}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Arma Inicial'}
          subView={'StarterWeapon'}
          item={character?.weapon}
          filledCheck={item => item}
          filledValue={item => item?.title}
          iconValue={item => (
            <WeaponIcon/>
          )}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Poderes'}
          subView={'Spells'}
          item={character}
          filledCheck={item => item?.spells?.length > 0 && item?.ultimate?.length > 0}
          filledValue={item => (
            <div className="block">
              {item?.spells.map(spell => (
                <div>✔ {spell.title}</div>
              ))}
              {item?.ultimate.map(spell => (
                <div>✔ {spell.title}</div>
              ))}
            </div>
          )}
          onSectionClick={onSectionClick}
        />

        <Modal
          isOpen={showFinalizingModal}
          onAfterOpen={e => {
            setCharacter({
              ...character,
              character_name: null,
              avatar: null,
            })
          }}
          onRequestClose={e => {
            setShowFinalizingModal(false)
            setCharacter({
              ...character,
              character_name: null,
              avatar: null,
            })
          }}
          contentLabel="Estamos quase lá!"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="flex h-full">
            <div className="bg-[#a5b9b9] border-black border-4 w-5/6 p-7 max-w-[400px] rounded-2xl m-auto self-center">
              <p className="font-dolly-bold text-2xl">
                Seu personagem está quase pronto, que tal dar um nome pra ele?
              </p>
              <div>
                <label className="mt-2 block font-adobe-kis text-lg">
                  Nome:
                  <input
                    type="text"
                    className="rounded-lg w-full px-2 py-1"
                    onChange={e => {
                      setCharacter({
                        ...character,
                        character_name: e.target.value,
                      })
                    }}
                  />
                </label>
                <label className="mt-2 block font-adobe-kis text-lg">
                  Avatar:
                  <AvatarSelection
                    specie={character?.specie?.permalink}
                    onSelect={n => {
                      setCharacter({
                        ...character,
                        avatar: n.toString()
                      })
                    }}
                  />
                </label>
                <div className="mt-4 flex gap-3">
                  <div>
                    <Button onClick={e => setShowFinalizingModal(false)}>
                      Voltar
                    </Button>
                  </div>
                  <div className="flex-1">
                    <Button disabled={!character?.character_name || !character?.avatar} onClick={handleSubmit}>
                      Criar personagem
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <div className="mt-7">
          {validateChoices() ? (
            <Button onClick={e => setShowFinalizingModal(true)}>Criar personagem</Button>
          ) : (
            <Button disabled>Criar personagem</Button>
          )}
        </div>
      </Container>
    </motion.div>
  )
}
