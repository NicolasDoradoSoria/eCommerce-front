import React from 'react'
import Carrousel from '../carousel/Carousel'
import { Image, Skeleton } from '@nextui-org/react'
import CarouselProvider from '../carousel/CarouselContext'
import useSWR from 'swr'
import { getCarrousel } from '@/service/Products.service'
import ErrorCard from '../products/ErrorCard'

function SalesCarousel() {

  const {data: imgs, isLoading, error} = useSWR("carrusel", getCarrousel)

  if(isLoading) {
    return (
    <Skeleton className="rounded-lg">
      <div className="h-[400px] rounded-lg bg-default-300"></div>
    </Skeleton>
    )
  } else if (error) {
    console.info("error in carousel", error)
    return <ErrorCard></ErrorCard>
  } else {
    return (
      <CarouselProvider time={5000} length={imgs.length}>
        <Carrousel>
        {imgs.map((img, i)=>{
        return (
          <Image key={i} alt='' src={img} classNames={{image: "object-cover", wrapper: "w-screen shrink-0 h-full snap-center"}}></Image>
        )}
        )}
      </Carrousel>
      </CarouselProvider>
    )
  }
}

export default SalesCarousel