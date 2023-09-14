import { Subtitle } from '../../../pages/components/title'
import { BsPatchQuestion } from 'react-icons/bs'

export default function SectionCard ({ item, folder, selectedItem, setSelectedItem }) {
  const selectedStyle = selectedItem == item.permalink ? "saturate-200" : "saturate-50"

  return (
    <div className={`m-auto w-full cursor-pointer ${selectedStyle}`} onClick={e => {
      setSelectedItem(item)}
    }>
      <div
        className="h-36 bg-blue rounded-lg border-white border-solid border bg-cover"
        style={{ backgroundImage: `url('/${folder}/${item.permalink}.jpg')`, height: '10rem' }}
      />
        <div className="text-center">
          <div className="mt-2 text-aero-blue">
            <Subtitle>
              <span className="text-xl">
                {item.name}
                {selectedItem === item.permalink}
              </span>
              {' '}
              <BsPatchQuestion className="inline" />
            </Subtitle>
          </div>
      </div>
    </div>
  )
}
