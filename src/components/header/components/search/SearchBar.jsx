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

  const {handleInput, handleKeyDown, handleSearchClick, search, input} = useSearch()


  return (
    <>
    <div className='flex flex-row justify-start w-fit'>
      <LayoutGroup>
        <motion.div
        layout
        style={{ 
          width: search ? "fit-content" : iconWidth,
          borderRadius: "15px",
          borderColor: color,
        }}
        className="flex flex-row justify-start border overflow-hidden">
            
            <motion.div layout style={{transition: "position"}} onClick={handleSearchClick}>
                <SearchIcon width={iconWidth} color={color}></SearchIcon>
            </motion.div>
            
            <motion.input layout placeholder='Search' 
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
            '/>
          
        </motion.div>
      </LayoutGroup>
    </div>
    </>
  )
}

export default SearchBar