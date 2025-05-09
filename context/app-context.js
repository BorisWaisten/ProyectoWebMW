'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
