import React from 'react'

export default function Button({ onClick = (e) => {}, className = "", children}) {
  return (
    <button
      onClick={e => onClick(e)}
      className={`bg-aero-blue p-4 text-dark-charcoal w-full py-2.5 rounded font-semibold ${className}`}
    >
        {children}
    </button>
  )
}
