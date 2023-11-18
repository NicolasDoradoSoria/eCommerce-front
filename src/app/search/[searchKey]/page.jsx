"use client"
import FiltersProvider from "./context/FiltersProvider"

export default function Home({params}) {
  return (
   <>
   <FiltersProvider params={params}/>
   </>
  )
}
