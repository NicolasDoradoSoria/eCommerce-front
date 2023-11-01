'use client'

import UserState from '@/context/userContext/UserState'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {
  return (
    <UserState>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </UserState>
  )
}