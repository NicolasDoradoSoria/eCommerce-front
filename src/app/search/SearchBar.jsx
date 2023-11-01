import React from 'react'
import SearchIcon from './SearchIcon'
import useToggle from '../hooks/useToggle';
import { motion, LayoutGroup } from 'framer-motion';

//falta que enter haga buscar
//falta la lógica de buscarlo
//faltan otros filtros de búsqueda

function SearchBar({iconWidth = "40px", color="rgb(185 28 28)"}) {

  const {handleValue: handleSearchClick, value: search} = useToggle(false);

  return (
    <>
    <div className='flex flex-row justify-start w-[450px]'>
      <LayoutGroup>
        <motion.div
        layout
        style={{ 
          width: search ? "fit-content" : iconWidth,
          borderRadius: "15px",
          borderColor: color,
        }}
        className="flex flex-row justify-start border overflow-hidden">
            
            <motion.div layout style={{transition: "position"}} onClick={()=> handleSearchClick()}>
                <SearchIcon width={iconWidth} color={color}></SearchIcon>
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