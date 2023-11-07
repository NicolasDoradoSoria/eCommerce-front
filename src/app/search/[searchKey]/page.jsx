"use client"
import Products from "@/components/products/Products"
import FilterOptions from "./components/FilterOptions"

export default function Home({params}) {
  return (
   <>
   <div className="m-1 md:grid grid-cols-6">
    <div className="col-span-1 w-full">
        <FilterOptions searchKey={params.searchKey}></FilterOptions>
    </div>

    <div className="col-span-5 w-full">
        <Products searchKey={params.searchKey}></Products>
    </div>
   </div>
   </>
  )
}
