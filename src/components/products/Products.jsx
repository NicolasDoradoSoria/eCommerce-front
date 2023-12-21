import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import useSWR from 'swr';
import { getFavorites, getProductsList } from '@/service/Products.service';
import SkeletonCard from './SkeletonCard';
import ErrorCard from './ErrorCard';
import { Pagination } from '@nextui-org/react';
import { useGetUserToken } from './hooks/useUserToken';

// the list should come from a call to a server
// skeleton on loading


function Products({searchKey="", sortType="", sortOrder=""}) {

  const [currentPage, setCurrentPage] = useState(1)

  const token = useGetUserToken()
  const {data: favorites, isLoading: favsLoading, error: favsError} = useSWR("Favorites"+token, (k)=> getFavorites(token))

  // use searchKey to fetch
  const {data, isLoading, error} = useSWR("ProductList"+currentPage+searchKey+sortType+sortOrder, (k)=> getProductsList({page: currentPage, searchKey, sortOrder, sortType}))

  var content;

  if (isLoading || favsLoading) {
    var lista = []
    for (var i = 0; i < 20; i++) {
      lista = lista.concat(i)
    }

    content = lista.map((i) => <SkeletonCard key={i} />)

  } else if (error) {
    return <ErrorCard></ErrorCard>
  } else if (favsError){
    console.log("error with favorite")
    return <ErrorCard></ErrorCard>
  } else {
      content = data.products.map((item) => (
        <ProductCard item={item} key={item._id} fav={favorites.includes(item._id)}></ProductCard>
      ))
  }

  return (
    <>
    <div className="productGrid lg:mx-20 m-10">
      {content}
    </div>
    <div className='w-full flex flex-row justify-center'>
    {!isLoading && !error ? (
      <Pagination total={data.TOTAL_PAGES} page={currentPage} onChange={setCurrentPage}/>
      ) : 
      ""
    }
    </div>
    </>
  )
}

export default Products