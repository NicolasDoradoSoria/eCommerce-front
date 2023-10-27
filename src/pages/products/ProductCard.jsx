import React from 'react'
import { Card, CardBody, Image, CardFooter } from '@nextui-org/react'

function ProductCard({item}) {
  return (
    <Card shadow="sm" className='hover:scale-105 transition-scale duration-75 rounded-sm min-w-[180px]' isPressable isHoverable={true} onPress={() => console.log("item pressed")}>
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
  )
}

export default ProductCard