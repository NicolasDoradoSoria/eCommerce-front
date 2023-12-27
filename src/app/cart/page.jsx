"use client"
import Products from '@/components/products/Products'
import React from 'react'
import { Button } from '@nextui-org/react'

function Cart() {
  return (
    <>
    <Button color="primary" variant='solid' 
    className='text-lg w-[50%] mx-auto mt-5 block rounded-sm p-1 text-center hover:brightness-110'>Buy All</Button>
    
    <Products isCart={true}></Products>
    </>
  )
}

export default Cart