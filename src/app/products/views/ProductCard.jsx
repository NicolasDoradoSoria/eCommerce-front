import React from 'react'
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react'
import Link from 'next/link';

function ProductCard({item}) {

  return (
    <Link href={`/products/${item.id}`} className='hover:scale-105 transition-scale duration-75 min-w-[180px]' >
      <Card shadow="sm" className='w-full rounded-sm' isPressable isHoverable={true}>
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
        </Card>
    </Link>
  )
}

export default ProductCard