import React from 'react'
import { Image, Button } from '@nextui-org/react'
import { useCarousel } from '@/components/carousel/useCarousel'
import ArrowRightIcon from './ArrowRightIcon'
import "./Carousel.css"
import ArrowLeftIcon from './ArrowLeftIcon'

function Carousel({imgs=[]}) {
      const {carousel, goNext, goPrev} = useCarousel(3000)
    
      const iconSize = "40px"
    
      return (
        <div className='relative'>
          <div className='controlOverlay'>
            <button onClick={goPrev} className='overlayButton'>
             <ArrowLeftIcon width={iconSize} heigth={iconSize}></ArrowLeftIcon>
            </button>
            <button onClick={goNext} className='overlayButton'>
              <ArrowRightIcon width={iconSize} height={iconSize}/>
            </button>
          </div>
          
          <div className='overflow-x-scroll snap-x snap-mandatory w-screen h-fit scroll-smooth scrollbar-hidden' ref={carousel}>
            <div className='w-fit flex flex-row flex-nowrap'>
              {imgs.map((img, i)=>{
                return (
                  <Image key={i} alt='' src={img} classNames={{image: "object-cover", wrapper: "w-screen shrink-none h-full snap-center"}}></Image>
                )
              })}
            </div>
          </div>
        </div>
      )
}

export default Carousel