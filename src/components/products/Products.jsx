import React from 'react'
import ProductCard from './ProductCard';
import { fruits } from './dataTemporary';
import useSWR from 'swr';
import { getProductList } from '@/api/endpoints';
import SkeletonCard from './SkeletonCard';
import ErrorCard from './ErrorCard';

// the list should come from a call to a server
// skeleton on loading


function Products() {

  //temporary solution to not having DB
  const list = fruits;

  //const {data, isLoading, error} = useSWR("ProductList", getProductsList)
  const isLoading = false
  const error = false


  var content;

  if (isLoading) {
    var lista = []
    for (var i = 0; i < 20; i++) {
      lista = lista.concat(i)
    }

    content = lista.map((i) => <SkeletonCard key={i} />)

  } else if (error) {
    return <ErrorCard></ErrorCard>
  } else {
      content = list.map((item) => (
        <ProductCard item={item} key={item.id}></ProductCard>
      ))
  }

  return (
    <div className="productGrid lg:mx-20 m-10">
      {content}
    </div>
  )
}

export default Products