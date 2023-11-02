import React from 'react'
import { Image, Button } from '@nextui-org/react'
import {HeartIcon} from '../../views/HeartIcon';
import { getProductDetails } from '@/api/endpoints';
import useSWR from 'swr';
import useToggle from '@/app/hooks/useToggle';
import { exampleProduct } from '../../dataTemporary';

//esto depende bastante de que info hay sobre el objeto
//hay imagenes extra? - carrusel


function ProductDetails({id}) {
    const {handleValue: handleFavorite, value: favorite} = useToggle(false);

    //const {data, isLoading, error} = useSWR(`ProductDetails${id}`, async (name) => await getProductDetails(id));
    const isLoading = false
    const error = false

    //en realidad debería ser una llamada para tener los detalles segun el id, que llega por el path
    const product = exampleProduct;

    if (isLoading) {
        return (<>
            LOADING...
        </>)
    } else if (error) {
        return (<>ERROR</>)
    } else {
        return (<>
            <div className='flex flex-col sm:flex-row items-center sm:items-stretch justify-start mx-5 md:mx-20 my-10 rounded-md
             drop-shadow-xl bg-content2
             text-foreground h-5/6'>
                
                <div className='w-fit shrink max-w-full min-w-[50px] object-contain'>
                    <Image src={product.img} alt={product.title} className='rounded-s-none sm:rounded-s-md rounded-e-none w-full max-w-sm sm:max-w-full' ></Image>
                </div>

                <div className='w-full'>
                    <div className='sticky top-0 p-5'>
                        <h1 className='text-2xl sm:text-4xl text-start font-extralight p-1'>{product.title}</h1>
                        <hr/>
                        <h2 className='text-lg text-start font-bold p-1'>{product.price}</h2>
                        <hr/>
                        <div className='flex flex-row gap-2 my-3'>
                            <Button color="primary" className='text-lg w-full rounded-sm p-1 text-center'>Add to cart</Button>
                            <Button color='secondary' isIconOnly aria-label="Favorite" className='p-2 rounded-sm' onPress={handleFavorite}>
                                <HeartIcon filled={favorite} />
                            </Button>    
                        </div>
                        <div className='p-5 text-sm'>{product.description}</div>
                    </div>
                </div>
            </div>      
    
        </>
        )
    }

   
}

export default ProductDetails