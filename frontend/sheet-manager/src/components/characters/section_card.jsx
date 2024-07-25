import { Subtitle } from '@/src/components/title'
import { BsPatchQuestion } from 'react-icons/bs'

export default function SectionCard ({ item, folder, selectedItem, setSelectedItem, onSelect }) {
  // const selectedStyle = selectedItem == item.permalink ? "saturate-200" : "saturate-50"

  return (
    <div className={`mx-auto mb-4 w-full cursor-pointer`} onClick={e => {
      onSelect(item)
      // setSelectedItem(item)
    }}>
      <div className="text-center">
        {/* h-48 rounded-3xl bg-gray-200 */}
        <div className={`relative rounded-3xl h-[127px] p-1.5 flex box-border`} style={{ backgroundColor: `${item.color || '#e5e7eb'}` }}>
          <div className='self-center relative h-full w-full border box-border border-dashed border-black rounded-3xl'>
          </div>
          <div
            className="absolute bottom-0 bg-cover rounded-3xl box-border top-[-32px] left-[-10px]"
            style={{ backgroundImage: `url('/${folder}/${item.permalink}.jpg')`, height: '166px', width: '165px' }}
          />
        </div>
      </div>
      <div className="mt-2 text-white">
          <Subtitle>
            <span className="text-xl font-normal font-dolly-bold">
              {item.name || item.title}
              {selectedItem === item.permalink}
            </span>
            {' '}
            <BsPatchQuestion className="inline" />
          </Subtitle>
          <p>
            {item.micro_description}
          </p>
        </div>
    </div>
  )
}
