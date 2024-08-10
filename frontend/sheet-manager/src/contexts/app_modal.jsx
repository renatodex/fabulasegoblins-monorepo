import { useContext, useState, createContext, useEffect } from 'react'
import ReactModal from "react-modal";
import { motion } from 'framer-motion';
import { IoMdCloseCircle } from 'react-icons/io';

export const AppModalContext = createContext(0);

// export function AppModal ({ children }) {
//   return (
//     <ReactModal
//       isOpen={openModal}>
//       <div className="border border-black p-4 bg-gray-600 rounded-lg">
//         {children}
//       </div>
//     </ReactModal>
//   )
// }

export function AppModalContent ({ title, children }) {
  const { setModalContent } = useContext(AppModalContext)

  return (
    <div>
      <div className='flex text-center border-b border-raisin-black pb-2 text-white text-xl font-dolly-bold'>
        <h2 className='flex-1 self-flex-end align-middle'>
          {title}
        </h2>
        <button className='self-center text-3xl' onClick={e => {
          e.stopPropagation()
          setModalContent(null)
        }}>
          <IoMdCloseCircle />
        </button>
      </div>
      <div className='pt-3 h-screen overflow-auto pb-32'>
        {children}
      </div>
    </div>
  )
}

export default function AppModalProvider ({ children }) {
  ReactModal.setAppElement("#modal")
  const [openModal, setOpenModal] = useState(false)
  const [modalComponent, setModalComponent] = useState(null)

  useEffect(() => {
    if(openModal) {
      document.body.classList.add('no-scroll');
    }

    if (!openModal) {
      document.body.classList.remove('no-scroll');
    }
  }, [openModal])

  return (
    <AppModalContext.Provider value={{
      setModalContent: (value) => {
        setOpenModal(!!value)
        setModalComponent(value)
      }}
    }>
      <ReactModal
        isOpen={openModal}
        onAfterOpen={e => {}}
        onRequestClose={e => {{
          if (setSelectedDetail) setSelectedDetail(null)
        }}}
        closeTimeoutMS={1000}
        className="ModalSlide"
        overlayClassName="OverlaySlide"
      >
        <motion.div
          initial={{
            y: openModal ? "100%" : 0
          }}
          animate={{
            y: openModal ? 0 : "100%",
          }}
          exit={{
            x: "100%"
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="border min-h-screen border-black p-4 bg-gray-600 rounded-lg">
            {modalComponent}
          </div>
        </motion.div>
      </ReactModal>

      {children}

      <div id="modal"></div>
    </AppModalContext.Provider>
  )
}
