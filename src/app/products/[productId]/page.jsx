"use client"
import ProductDetails from "./views/ProductDetails"

export default function Page({params}) {
  return (
   <>
        <ProductDetails id={params.productId}></ProductDetails>
   </>
  )
}