import React from 'react'
import ProductCard from '@/components/products/ProductCard'
import useSWR from 'swr';
import { getFavorites, getProductSimilar } from '@/service/Products.service';
import { fruits } from '@/components/products/dataTemporary';
import SkeletonCard from '@/components/products/SkeletonCard';
import ErrorCard from '@/components/products/ErrorCard';
import { useGetUserToken } from '@/components/products/hooks/useUserToken';

//alternativamente podría ser un carrusel con paginación.

function ProductsSimilar({id}) {

  //favorite
  const token = useGetUserToken()
  const {data: favorites, isLoading: favsLoading, error: favsError} = useSWR("FavoritesToSimilar"+token, (k)=> getFavorites(token))

  // the fetcher function is called with the key (`ProductsSimilarID`) as a parameter
  const {data, isLoading, error} = useSWR(`ProductSimilar${id}`, async (key) => await getProductSimilar(id));

  const loadingList = [1,1,1,1,1,1,1]

    if (error) {
      return (<ErrorCard/>)
    } else if (favsError) {
      console.log("error con favoritos para productos similares")
      return (<ErrorCard/>)
    } else {
      //debug
      console.log("voy a render con", favorites)
      return (
        <div className='p-5'>
            <h1 className='p-2 text-light'>You may also like...</h1>
            <div className='w-full overflow-x-scroll overflow-y-visible h-fit p-3'>
                <div className='flex flex-row gap-5 w-fit'>
                    {(isLoading || favsLoading)? 
                    (
                      loadingList.map((e, i)=><SkeletonCard key={i}/>)
                    )
                    :
                    data.products.map((item) => (
                        <ProductCard item={item} key={item._id} fav={favorites.includes(item._id)}></ProductCard>
                    ))}
                </div>
            </div>
            
        </div>
      )
    }
}

export default ProductsSimilar