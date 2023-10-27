import React from 'react'
import SearchIcon from './SearchIcon'
import { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState(false);

    function handleSearchClick() {
        setSearch(!search);
    }

  return (
    <>
    <div className='w-fit flex flex-row justify-center m-auto my-20 border border-red-500 overflow-hidden rounded-2xl'>
        <div style={{transition: "position"}} onClick={()=> handleSearchClick()}>
            <SearchIcon width={"40px"}></SearchIcon>
        </div>
        {search && (
            <input placeholder='search' 
            className=' 
            focus:outline-none 
            focus:bg-slate-100 
            transition-colors 
            duration-100
            w-[200px]
            object-cover
            p-1
            '/>
        )}
    </div>
    </>
  )
}

export default SearchBar