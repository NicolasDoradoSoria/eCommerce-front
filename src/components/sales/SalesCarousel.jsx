import React from 'react'
import Carrousel from '../carousel/Carousel'

function SalesCarousel() {
  const imgs = [
    "https://static.vecteezy.com/system/resources/previews/015/602/622/non_2x/beautiful-merry-christmas-festival-stylish-banner-design-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/000/286/742/large_2x/vector-abstract-merry-christmas-banner-template.jpg",
    "https://static.vecteezy.com/system/resources/previews/015/602/627/non_2x/decorative-merry-christmas-festival-stylish-banner-design-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/502/019/non_2x/merry-christmas-festival-decorative-modern-banner-design-vector.jpg"
]

  return (
    <Carrousel imgs={imgs}/>
  )
}

export default SalesCarousel