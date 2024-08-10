import { IoMdCloseCircle } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

export default function AccountNavigationModal ({ onLogout, onClose, visible }) {
  if (!visible) return null;

  return (
    <div className='fixed z-50'>
      <div className=' fixed text-white -translate-x-2/4 -translate-y-2/4 w-[300px] left-1/2 top-1/2'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className='border shadow-xl rounded-2xl bg-slate-900/95 p-3'>
            <div className='text-3xl flex justify-between p-4'>
              <span className='font-dolly-bold'>Minha conta</span>
              <IoMdCloseCircle onClick={onClose} className='inline-block' />
            </div>
            <ul className='p-4 pt-0 text-xl font-adobe-kis'>
              <li className='border-b border-t border-white py-3'>
                <a href="#" className='text-gray-500'>Alterar dados (em breve)</a>
              </li>
              <li className='border-b py-3'>
                <a href="#" onClick={onLogout}>Sair</a>
                {/* {loading ? 'Saindo...' : (<a href="#" onClick={onLogout}>Sair</a>)} */}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
