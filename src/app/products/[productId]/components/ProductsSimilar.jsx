import React from 'react'
import ProductCard from '../../components/ProductCard'
import useSWR from 'swr';
import { getProductSimilar } from '@/api/endpoints';
import { fruits } from '../../dataTemporary';

//alternativamente podría ser un carrusel con paginación.

function ProductsSimilar({id}) {

  // the fetcher function is called with the key (`ProductsSimilarID`) as a parameter
  //const {data, isLoading, error} = useSWR(`ProductSimilar${id}`, async (key) => await getProductSimilar(id));
  const isLoading = false;
  const error = false;

    //esto sería alguna llamda. según el id del path?
    const list = fruits;

    if (isLoading) {
      return (<>LOADING</>)
    } else if (error) {
      return (<>ERROR</>)
    } else {
      return (
        <div className='p-5'>
            <h1 className='p-2 text-light'>You may also like...</h1>
            <div className='w-full overflow-x-scroll overflow-y-visible h-fit p-3'>
                <div className='flex flex-row gap-5 w-fit'>
                    {list.map((item) => (
                        <ProductCard item={item} key={item.id}></ProductCard>
                    ))}
                </div>
            </div>
            
        </div>
      )
    }
}

export default ProductsSimilar