'use client'

import { ReactNode, createContext } from 'react'

interface BillingProviderProps {
  children: ReactNode
}

export const BillingContext = createContext({})

export function BillingProvider({ children }: BillingProviderProps) {
  return (
    <BillingContext.Provider value={{}}>
      {children}
    </BillingContext.Provider>
  )
}