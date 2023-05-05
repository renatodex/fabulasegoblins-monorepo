import { Subtitle } from '../../../pages/components/title'
import { BsPatchQuestion } from 'react-icons/bs'

export default function RoleCard ({ role, selectedRole, setSelectedRole }) {
  const selectedStyle = selectedRole == role.permalink ? "saturate-200" : "saturate-50"

  return (
    <div className={`m-auto w-full cursor-pointer ${selectedStyle}`} onClick={e => {
      setSelectedRole(role.permalink)}
    }>
      <div
        className="h-36 bg-blue rounded-lg border-white border-solid border bg-cover"
        style={{ backgroundImage: `url('/roles/${role.permalink}.jpg')`, height: '10rem' }}
      />
        <div className="text-center">
          <div className="mt-2 text-aero-blue">
            <Subtitle>
              <span className="text-xl">
                {role.name}
                {selectedRole === role.permalink}
              </span>
              {' '}
              <BsPatchQuestion className="inline" />
            </Subtitle>
          </div>
      </div>
    </div>
  )
}
