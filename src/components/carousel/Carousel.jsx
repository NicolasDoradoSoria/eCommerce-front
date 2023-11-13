import React from 'react'
import ArrowRightIcon from './ArrowRightIcon'
import "./Carousel.css"
import ArrowLeftIcon from './ArrowLeftIcon'
import { CarouselContext } from './CarouselContext'
import { useContext } from 'react'

function Carousel({children, controls=true}) {
  
      const {carousel, goNext, goPrev} = useContext(CarouselContext)
    
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