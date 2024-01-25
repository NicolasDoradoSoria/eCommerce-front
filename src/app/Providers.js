'use client'

import CategoryState from '@/context/categoryContext/CategoryState'
import ProductState from '@/context/productsContext/ProductState'
import SnackbarState from '@/context/snackbarContext/SnackbarState'
import UserState from '@/context/userContext/UserState'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {
  return (
    <SnackbarState>
      <UserState>
        <ProductState>
          <CategoryState>
            <NextUIProvider>
              {children}
            </NextUIProvider>
          </CategoryState>
        </ProductState>
      </UserState>
    </SnackbarState>
  )
}