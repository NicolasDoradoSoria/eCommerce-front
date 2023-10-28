import React from 'react'
import SearchIcon from './SearchIcon'
import { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';

//make color a variable? both for icon and border

function SearchBar() {
    const iconWidth = "40px"
    const [search, setSearch] = useState(false);

    function handleSearchClick() {
        setSearch(!search);
    }

  return (
    <>
    <div className='flex flex-row justify-start w-[450px]'>
      <LayoutGroup>
        <motion.div
        layout
        style={{ 
          width: search ? iconWidth : "fit-content",
          borderRadius: "15px",
        }}
        className="flex flex-row justify-start border border-red-500 overflow-hidden">
            
            <motion.div layout style={{transition: "position"}} onClick={()=> handleSearchClick()}>
                <SearchIcon width={iconWidth}></SearchIcon>
            </motion.div>
            
            <motion.input layout placeholder='Search' 
            className=' 
            focus:outline-none 
            focus:bg-slate-100 
            transition-colors 
            duration-100
            object-cover
            p-1
            '/>
          
        </motion.div>
      </LayoutGroup>
    </div>
    </>
  )
}

export default SearchBar