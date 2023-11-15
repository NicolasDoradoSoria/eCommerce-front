import { Skeleton } from '@nextui-org/react'
import React from 'react'

function FilterLoading() {
  return (
    <div className='ms-3 mt-3 lg:ms-12 lg:mt-20'> 
        <Skeleton className='h-full w-1/3 rounded-lg bg-default-300'></Skeleton>

        <div className='w-full h-full space-y-3'>
            <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-white"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-white"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
            <div className="h-3 w-2/5 rounded-lg bg-white"></div>
            </Skeleton>
        </div>
</div>
  )
}

export default FilterLoading