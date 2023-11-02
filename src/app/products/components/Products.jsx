import React from 'react'
import ProductCard from './ProductCard';
import { fruits } from '../dataTemporary';
import useSWR from 'swr';
import { getProductList } from '@/api/endpoints';

// the list should come from a call to a server
// skeleton on loading


function Products() {

  //temporary solution to not having DB
  const list = fruits;

  //const {data, isLoading, error} = useSWR("ProductList", getProductsList)
  const isLoading = false
  const error = false

  if (isLoading) {
    return <>LOADING</>
  } else if (error) {
    return <>ERROR</>
  } else {
      return (
        <div className="productGrid lg:mx-20 m-10">
          {list.map((item) => (
            <ProductCard item={item} key={item.id}></ProductCard>
          ))}
        </div>
      )
  }
}

export default Products