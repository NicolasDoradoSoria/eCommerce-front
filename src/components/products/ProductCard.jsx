import React from 'react'
import { Card, CardBody, Image, CardFooter, Button } from '@nextui-org/react'
import Link from 'next/link';
import { HeartIcon } from './HeartIcon';
import useToggle from '@/hooks/useToggle';

function ProductCard({item}) {

  //each item should ask if they are a favorite for inital state and also update DB on change. Probs should pass id actually. we'll see
  const {handleValue: handleFavorite, value: favorite} = useToggle(false);

  return (
    <div className='w-full hover:scale-105 transition-scale duration-75 relative rounded-sm overflow-hidden'>
      <Button color='secondary' variant='flat' isIconOnly disableRipple aria-label="Favorite" onClick={handleFavorite} 
      className='p-2 absolute t-0 s-0 z-20 overflow-hidden bg-transparent'>
          <HeartIcon filled={favorite} />
      </Button>  
      <Card shadow="sm" className='w-full min-w-[180px]' isPressable isHoverable={true}>
        <Link href={`/products/${item._id}`}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              width="100%"
              alt={item.name}
              className="w-full object-cover h-[250px]"
              src={item.images[0]}
            />
          </CardBody>
          <CardFooter className="text-small flex justify-between">
            <b className='text-left'>{item.name}</b>
            <p className="text-default-500 price">{item.price}</p>
          </CardFooter>
        </Link>
      </Card>
    </div>
  )
}

export default ProductCard