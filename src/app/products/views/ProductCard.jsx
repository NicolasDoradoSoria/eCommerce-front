import React, { useState } from 'react'
import { Card, CardBody, Image, CardFooter, Button } from '@nextui-org/react'
import Link from 'next/link';
import { HeartIcon } from './HeartIcon';

function ProductCard({item}) {

  //each item should ask if they are a favorite for inital state and also update DB on change
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => setFavorite(!favorite);

  return (
    <Card shadow="sm" className='w-full rounded-sm hover:scale-105 transition-scale duration-75 min-w-[180px]' isPressable isHoverable={true}>
      <Button isIconOnly color="danger" aria-label="Favorite" onClick={handleFavorite} className='p-2 absolute t-0 s-0 z-20'>
          <HeartIcon fill='rgb(127 29 29)' filled={favorite} />
      </Button>   
      <Link href={`/products/${item.id}`}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            width="100%"
            alt={item.title}
            className="w-full object-cover h-[250px]"
            src={item.img}
          />
        </CardBody>
        <CardFooter className="text-small flex justify-between">
          <b>{item.title}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default ProductCard