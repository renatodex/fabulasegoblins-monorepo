import React, { createContext, useState } from 'react';

export const ScreenSlideContext = createContext(0);

export default function ScreenSlideProvider ({ children }) {
  const [parentViewX, setParentViewX] = useState(0)
  const [subViewX, setSubViewX] = useState("100%")
  const [parentViewVisibility, setParentViewVisibility] = useState(true)
  const [subViewVisibility, setSubViewVisibility] = useState(false)
  const [selectedSubView, setSelectedSubView] = useState(null)

  return (
    <ScreenSlideContext.Provider value={{
      parentViewX: parentViewX,
      setParentViewX: setParentViewX,
      subViewX: subViewX,
      setSubViewX: setSubViewX,
      parentViewVisibility: parentViewVisibility,
      setParentViewVisibility: setParentViewVisibility,
      subViewVisibility: subViewVisibility,
      setSubViewVisibility: setSubViewVisibility,
      selectedSubView: selectedSubView,
      setSelectedSubView: setSelectedSubView,
    }}>
      <div>
        {children}
      </div>
    </ScreenSlideContext.Provider>
  )
}
