import React from 'react'
import { Card, Skeleton } from '@nextui-org/react';

function SkeletonProductDetails() {
    return (
        
        <div className='flex flex-col sm:flex-row items-center content-stretch sm:items-stretch justify-center mx-5 md:mx-20 my-10 rounded-md
        drop-shadow-xl bg-content2
        text-foreground sm:h-[600px] p-5'>
           
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
      );
}

export default SkeletonProductDetails