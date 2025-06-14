'use client'

import { ReactNode, createContext, useState } from 'react'

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({})

export default function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  )
}