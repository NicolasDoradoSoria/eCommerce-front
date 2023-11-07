"use client"
import Products from "@/components/products/Products"
import SalesCarousel from "@/components/sales/SalesCarousel"

export default function Home() {
  return (
   <>
    <SalesCarousel></SalesCarousel>
    <Products></Products>
   </>
  )
}
