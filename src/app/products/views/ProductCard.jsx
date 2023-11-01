import React from 'react'
import { Card, CardBody, Image, CardFooter, Button } from '@nextui-org/react'
import Link from 'next/link';
import { HeartIcon } from './HeartIcon';
import useFavorite from '../hooks/useFavorite';

function ProductCard({item}) {

  //each item should ask if they are a favorite for inital state and also update DB on change. Probs should pass id actually. we'll see
  const {handleFavorite, favorite} = useFavorite(false);

  return (
    <div className='w-full hover:scale-105 transition-scale duration-75 relative'>
      <Button isIconOnly disableRipple color="danger" aria-label="Favorite" onClick={handleFavorite} 
      className='p-2 absolute t-0 s-0 z-20 overflow-hidden'>
          <HeartIcon fill='rgb(127 29 29)' filled={favorite} />
      </Button>  
      <Card shadow="sm" className='w-full rounded-sm  min-w-[180px]' isPressable isHoverable={true}>
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
    </div>
  )
}

export default ProductCard