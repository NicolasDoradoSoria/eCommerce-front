"use client"
import Products from '@/components/products/Products'
import React from 'react'

function Home() {
  return (
    <Products searchKey='favorites' />
  )
}

export default Home