import React from 'react'
import SearchIcon from './SearchIcon'
import { useSearch } from './hooks/useSearch';
import { motion, LayoutGroup } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig)


//falta que enter haga buscar
//falta la lógica de buscarlo
//faltan otros filtros de búsqueda

function SearchBar({iconWidth = "40px", color=fullConfig.theme.colors.searchColor}) {

  const {handleInput, handleKeyDown, handleSearchClick, isMobileSize, search, input} = useSearch()  

  return (
    <>
    <div className='flex flex-row justify-start max-w-full shrink min-w-[100px]'>
      <LayoutGroup>
        <motion.div
        layout
        style={{ 
          maxWidth: search || isMobileSize() ? "fit-content" : iconWidth,
          borderRadius: "15px",
          borderColor: color,
          justifyContent: "start"
        }}
        className="flex flex-row border overflow-hidden shrink">
            
            <motion.label layout htmlFor='search' className='shrink-0' onClick={handleSearchClick}>
                <SearchIcon width={iconWidth} color={color}></SearchIcon>
            </motion.label>
            
            <motion.input layout placeholder='Search' 
            id='search'
            onChange={(e)=>handleInput(e)}
            name='search'
            onKeyDown={(e)=>handleKeyDown(e)}
            value={input}
            className=' 
            focus:outline-none 
            focus:bg-content3 
            transition-colors 
            duration-100
            object-cover
            p-1
            shrink
            '/>
          
        </motion.div>
      </LayoutGroup>
    </div>
    </>
  )
}

export default SearchBar