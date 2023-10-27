import React from 'react'
import ProductCard from './ProductCard'

//alternativamente podría ser un carrusel con paginación.

function ProductsSimilar() {

    //esto sería alguna llamda. según el id del path?
    const list = [
        {
            id: 1,
            title: "Orange",
            img: "https://nextui.org/images/fruit-1.jpeg",
            price: "$5.50",
          },
          {
            id: 2,
            title: "Tangerine",
            img: "https://nextui.org/images/fruit-2.jpeg",
            price: "$3.00",
          },
          {
            id: 3,
            title: "Raspberry",
            img: "https://nextui.org/images/fruit-3.jpeg",
            price: "$10.00",
          },
          {
            id: 4,
            title: "Lemon",
            img: "https://nextui.org/images/fruit-4.jpeg",
            price: "$5.30",
          },
          {
            id: 5,
            title: "Avocado",
            img: "https://nextui.org/images/fruit-5.jpeg",
            price: "$15.70",
          },
          {
            id: 6,
            title: "Lemon 2",
            img: "https://nextui.org/images/fruit-6.jpeg",
            price: "$8.00",
          },
          {
            id: 7,
            title: "Banana",
            img: "https://nextui.org/images/fruit-7.jpeg",
            price: "$7.50",
          },
          {
            id: 8,
            title: "Watermelon",
            img: "https://nextui.org/images/fruit-8.jpeg",
            price: "$12.20",
          },
          {
            id: 9,
            title: "Orange",
            img: "https://nextui.org/images/fruit-1.jpeg",
            price: "$5.50",
          },
          {
            id: 10,
            title: "Tangerine",
            img: "https://nextui.org/images/fruit-2.jpeg",
            price: "$3.00",
          },
          {
            id: 11,
            title: "Raspberry",
            img: "https://nextui.org/images/fruit-3.jpeg",
            price: "$10.00",
          },
          {
            id: 12,
            title: "Lemon",
            img: "https://nextui.org/images/fruit-4.jpeg",
            price: "$5.30",
          },
          {
            id: 13,
            title: "Avocado",
            img: "https://nextui.org/images/fruit-5.jpeg",
            price: "$15.70",
          },
          {
            id: 14,
            title: "Lemon 2",
            img: "https://nextui.org/images/fruit-6.jpeg",
            price: "$8.00",
          },
          {
            id: 15,
            title: "Banana",
            img: "https://nextui.org/images/fruit-7.jpeg",
            price: "$7.50",
          },
          {
            id: 16,
            title: "Watermelon",
            img: "https://nextui.org/images/fruit-8.jpeg",
            price: "$12.20",
          },
          {
            id: 17,
            title: "Orange",
            img: "https://nextui.org/images/fruit-1.jpeg",
            price: "$5.50",
          },
          {
            id: 18,
            title: "Tangerine",
            img: "https://nextui.org/images/fruit-2.jpeg",
            price: "$3.00",
          },
    ]

  return (
    <div className='p-5'>
        <h1 className='p-2 text-light'>You may also like...</h1>
        <div className='w-full overflow-x-scroll overflow-y-hidden h-fit'>
            <div className='flex flex-row gap-3 w-fit'>
                {list.map((item) => (
                    <ProductCard item={item} key={item.id}></ProductCard>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default ProductsSimilar