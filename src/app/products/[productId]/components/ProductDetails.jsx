import React from 'react'
import { getFavorites, getProductDetails } from '@/service/Products.service';
import useSWR from 'swr';
import ErrorCard from '@/components/error/ErrorCard';
import CarouselProvider from '@/components/carousel/CarouselContext';
import MainProductDetails from './MainProductDetails';
import { useGetUserToken } from '@/components/products/hooks/useUserToken';

//esto depende bastante de que info hay sobre el objeto
//hay imagenes extra? - carrusel


function ProductDetails({id}) {
    //favorite
    const token = useGetUserToken()
    const {data: favorites, isLoading: favsLoading, error: favsError} = useSWR("Favorites"+token+id, (k)=> getFavorites(token))

    //call to server
    const {data: product, isLoading, error} = useSWR(`ProductDetails${id}`, async (name) => await getProductDetails(id));

    if (error) {
        return (<ErrorCard msg={error.message} extra='In data:'/>)
    } else if (favsError) {
        return (<ErrorCard msg={favsError.message} extra='In favorites:'/>)
    } else {
        return (<>
            {isLoading || favsLoading? (
            <div className='grid grid-cols-1 sm:grid-cols-3 items-center content-stretch sm:items-stretch justify-start mx-5 md:mx-20 my-10 rounded-md
             drop-shadow-xl bg-content2
             text-foreground sm:h-[600px]'>
                <div className='shrink max-w-full max-h-full min-w-[50px] object-contain flex justify-center items-center overflow-hidden'>
                        <div className='bg-content4 w-[450px] h-[400px] rounded-lg m-10'></div>
                    
                </div>
                <div className='w-full max-h-full col-span-2'>
                    <div className='p-10 '>
                        <div className='w-1/3 h-10 bg-content4 rounded-2xl my-5 '></div>
                        <div className='w-2/3 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-1/2 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-2/3 h-5 bg-content4 rounded-lg my-5 '></div>
                        <div className='w-1/2 h-5 bg-content4 rounded-lg my-5 '></div>
                     </div>
                    
                </div>
            </div>
            ) :
            (
            <CarouselProvider time={0} length={product.image.length}>
                <MainProductDetails product={product} isFav={favorites.includes(product._id)}/>
            </CarouselProvider>
            )
            }            
        </>
        )
    }

   
}

export default ProductDetails