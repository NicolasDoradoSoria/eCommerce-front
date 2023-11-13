import React, { useState } from 'react'
import { Image, Button } from '@nextui-org/react'
import {HeartIcon} from '@/components/products/HeartIcon';
import { getProductDetails } from '@/service/Products.service';
import useSWR from 'swr';
import useToggle from '@/hooks/useToggle';
import { exampleProduct } from '@/components/products/dataTemporary';
import { useZoom } from '../hooks/useZoom';
import { useActive } from '../hooks/useActive';
import { Skeleton } from '@nextui-org/react';
import "../styles.css"
import ErrorCard from '@/components/products/ErrorCard';
import Carousel from '@/components/carousel/Carousel';

//esto depende bastante de que info hay sobre el objeto
//hay imagenes extra? - carrusel


function ProductDetails({id}) {
    //favorite
    const {handleValue: handleFavorite, value: favorite} = useToggle(false);

    //Active
    const {active, handleActive} = useActive();

    //zoom
    const {handleOrigin, handleQuitZoom, handleZoom, origin, zoom} = useZoom();

    //call to server
    const {data: product, isLoading, error} = useSWR(`ProductDetails${id}`, async (name) => await getProductDetails(id));

    if (error) {
        return (<ErrorCard/>)
    } else {
        return (<>
            <div className='grid grid-cols-1 sm:grid-cols-3 items-center content-stretch sm:items-stretch justify-start mx-5 md:mx-20 my-10 rounded-md
             drop-shadow-xl bg-content2
             text-foreground sm:h-[600px]'>
                <div className='shrink max-w-full max-h-full min-w-[50px] object-contain flex justify-center items-center overflow-hidden'>
                    {isLoading ? 
                     (
                        <div className='bg-content4 w-[450px] h-[400px] rounded-lg m-10'></div>
                     )
                    : (
                        <Carousel time={0} controls={true}>
                            {product.images.map((img, i)=>{
                                return (
                                <Image src={img} alt={product.name} 
                                style={{transformOrigin: origin}} key={i}
                                onMouseMove={(e) => handleOrigin(e)} onClick={handleZoom} 
                                onMouseLeave={handleQuitZoom}
                                classNames={{
                                    "wrapper":'rounded-none w-full shrink-0 snap-center h-full overflow-hidden',
                                    "img":"rounded-none"+(zoom ? " zoom-in" : " zoom-normal")
                                    }} >
                                </Image>
                                )
                            })}
                        </Carousel>
                    )
                }
                    
                </div>

                <div className='w-full max-h-full col-span-2'>
                    {isLoading ? 
                     (<div className='p-10 '>
                        <div className='w-1/3 h-10 bg-content4 rounded-2xl my-5 '></div>
                        <div className='w-2/3 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-1/2 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-2/3 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-1/2 h-5 bg-content4 rounded-lg my-5 '></div>
                     </div>)
                     :
                     (
                        <div className='sticky top-0 p-5'>
                            <h1 className='text-2xl sm:text-4xl text-start font-extralight p-1'>{product.name}</h1>
                            <hr/>
                            <h2 className='text-lg text-start font-bold p-1'>{product.price}</h2>
                            <hr/>
                            <div className='flex flex-row gap-2 my-3'>
                                <Button color="primary" variant='solid' className='text-lg w-full rounded-sm p-1 text-center hover:brightness-110'>Add to cart</Button>
                                <Button color='secondary' isIconOnly aria-label="Favorite" className='p-2 rounded-sm' onPress={handleFavorite}>
                                    <HeartIcon filled={favorite} />
                                </Button>    
                            </div>
                            <div className='p-5 text-sm'>{product.description}</div>
                            <div className=' flex flex-row gap-1 flex-wrap'>
                                {product.images.map((src, index) => {
                                    return (
                                    <Image src={src} alt={product.name} key={index}
                                    className={`object-cover w-[80px] h-[80px] rounded-none `+(active==index ? " outline" : " grayscale-50")}
                                    onMouseEnter={()=>handleActive(index)} onClick={()=> handleActive(index)}></Image>
                                    )
                                })
                                }
                            </div>
                        </div>
                        )
                    }
                    
                </div>
            </div>      
    
        </>
        )
    }

   
}

export default ProductDetails