"use client"
import ProductDetails from "./views/ProductDetails"
import ProductsSimilar from "./views/ProductsSimilar"

export default function Page({params}) {
  return (
   <>
        <ProductDetails id={params.productId}></ProductDetails>
        <ProductsSimilar id={params.productId}></ProductsSimilar>  
   </>
  )
}