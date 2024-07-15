import { Subtitle } from '../../../pages/components/title'
import { BsPatchQuestion } from 'react-icons/bs'

export default function SectionCard ({ item, folder, selectedItem, setSelectedItem }) {
  // const selectedStyle = selectedItem == item.permalink ? "saturate-200" : "saturate-50"

  return (
    <div className={`m-auto w-full cursor-pointer`} onClick={e => {
      setSelectedItem(item)}
    }>
      <div className="text-center">

        {/* h-48 rounded-3xl bg-gray-200 */}
        <div className='bg-gray-200 relative rounded-3xl h-[107px] p-1.5 flex box-border'>
          <div className='self-center relative h-full w-full border box-border border-dashed border-black rounded-3xl'>
            <div
              className="absolute bottom-0 bg-cover rounded-3xl box-border top-[-37px] left-[-7px]"
              style={{ backgroundImage: `url('/${folder}/${item.permalink}.jpg')`, height: '137px', width: '170px' }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2 text-white">
          <Subtitle>
            <span className="text-xl">
              {item.name || item.title}
              {selectedItem === item.permalink}
            </span>
            {' '}
            <BsPatchQuestion className="inline" />
          </Subtitle>
          <p>
            {item.short_description}
          </p>
        </div>
    </div>
  )
}
