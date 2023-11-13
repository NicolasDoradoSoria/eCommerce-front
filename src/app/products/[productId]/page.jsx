"use client"
import ProductDetails from "./components/ProductDetails"
import ProductsSimilar from "./components/ProductsSimilar"
import CarouselProvider from '@/components/carousel/CarouselContext';


export default function Page({params}) {
  return (
   <>
      
      <ProductDetails id={params.productId}></ProductDetails>
      <ProductsSimilar id={params.productId}></ProductsSimilar>  
   </>
  )
}