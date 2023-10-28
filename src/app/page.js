"use client"
import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
   <>
   <NextUIProvider>
    <h1>Home sweet home. Try the routes /login and /products. Also maybe /search</h1>
   </NextUIProvider>
   </>
  )
}
