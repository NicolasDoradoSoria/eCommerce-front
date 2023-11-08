'use client'

import SnackbarState from '@/context/snackbarContext/SnackbarState'
import UserState from '@/context/userContext/UserState'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {
  return (
    <SnackbarState>
      <UserState>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </UserState>
    </SnackbarState>
  )
}