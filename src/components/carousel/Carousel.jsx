import React from 'react'
import { Image, Button } from '@nextui-org/react'
import { useCarousel } from '@/components/carousel/useCarousel'
import ArrowRightIcon from './ArrowRightIcon'
import "./Carousel.css"
import ArrowLeftIcon from './ArrowLeftIcon'

function Carousel({children, time, controls=true}) {
      const {carousel, goNext, goPrev} = useCarousel(time)
    
      const iconSize = "40px"
    
      return (
        <div className='relative'>
        {controls && (
          <div className='controlOverlay'>
            <button onClick={goPrev} className='overlayButton'>
             <ArrowLeftIcon width={iconSize} heigth={iconSize}></ArrowLeftIcon>
            </button>
            <button onClick={goNext} className='overlayButton'>
              <ArrowRightIcon width={iconSize} height={iconSize}/>
            </button>
          </div>
        )
        }
        
          
          <div className='overflow-x-scroll snap-x snap-mandatory w-full h-fit scroll-smooth scrollbar-hidden' ref={carousel}>
            <div className='w-fit flex flex-row flex-nowrap items-center'>
              {children}
            </div>
          </div>
        </div>
      )
}

export default Carousel