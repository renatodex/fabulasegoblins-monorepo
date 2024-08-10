export default function CharacterSelection ({
  label,
  subView,
  item,
  filledValue = function () { return '' },
  filledCheck = function () { return false },
  iconValue = null,
  onSectionClick,
  changeButtonLabel = 'alterar',
  initialButtonLabel = 'escolher'
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
                className="relative w-20 h-20 bg-cover border bg-center border-gray-500 rounded-full bg-gray-200"
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
                <button className="bg-black rounded-2xl text-white px-3 py-0.5 text-sm border-0">{changeButtonLabel}</button>
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
                <button className="bg-black rounded-2xl text-white px-3 py-0.5 text-sm border-0">{initialButtonLabel}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
