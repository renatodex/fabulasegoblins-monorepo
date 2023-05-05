import React, { createContext, useState } from 'react';

export const ScreenSlideContext = createContext(0);

export default function ScreenSlideProvider ({ children }) {
  const [parentViewX, setParentViewX] = useState(0)
  const [subViewX, setSubViewX] = useState("100%")

  return (
    <ScreenSlideContext.Provider value={{
      parentViewX: parentViewX,
      setParentViewX: setParentViewX,
      subViewX: subViewX,
      setSubViewX: setSubViewX,
    }}>
      <div>
        {children}
      </div>
    </ScreenSlideContext.Provider>
  )
}
