import React, { useContext } from 'react'
import {Radio, RadioGroup, Checkbox, CheckboxGroup, Button, Select, SelectItem } from "@nextui-org/react"
import { useControlledForm } from '../hooks/useControlledForm'
import useSWR from 'swr'
import ErrorCard from '@/components/products/ErrorCard'
import { getFilters } from '@/service/Products.service'
import FilterLoading from './FilterLoading'
import { FiltersContext } from '../context/FiltersProvider'

function FilterOptions() {
  const {setSortType, setSortOrder} = useContext(FiltersContext)

  // para que el handle submit funcione, es posible que necesite armar mi form con valores distintos
  const {handleChange, handleSubmit, isCheckbox, handleSelect, DEFAULT, MAYOR_PRECIO, MENOR_PRECIO} = useControlledForm(setSortType, setSortOrder)

  const {data, isLoading, error} = useSWR("Filters", getFilters)

  if (error) {
    return <ErrorCard error={error}/>
  } else if (isLoading) {
    return <FilterLoading/>
  } else {
      //mantengo mi código más general para una implementación un toque más puntual
      //no estoy guardando los ids de las categorías acá
      const filtros = [{
        title: "Categorías",
        type: "radio",
        options: data
      }]

      //vista
      return (
        <form className='ms-3 mt-3 lg:ms-12 lg:mt-20'>
          <div className='flex flex-col'>
            <Button variant="ghost" color='primary' onPress={handleSubmit} className='my-3'>Filtrar</Button>
            <Select label="Ordenar por" onSelectionChange={handleSelect} variant='bordered'>
              <SelectItem key={DEFAULT} value={DEFAULT}>Relevancia</SelectItem>
              <SelectItem key={MENOR_PRECIO} value={MENOR_PRECIO}>Menor precio</SelectItem>
              <SelectItem key={MAYOR_PRECIO} value={MAYOR_PRECIO}>Mayor Precio</SelectItem>
            </Select>
          </div>
          <div className='flex flex-row flex-wrap md:flex-col gap-10 md:gap-0'>
            {filtros.map((seccion, i) => {
              return (
              <div key={i} className='my-3'>

                {(isCheckbox(seccion.type)) ? (
                  <CheckboxGroup label={seccion.title} onValueChange={(value)=>handleChange(seccion.title, value)}>
                    {seccion.options.map((opcion, i)=> {
                    return (
                      <Checkbox key={i} value={opcion._id}>{opcion.name}</Checkbox>
                    )
                  })}
                  </CheckboxGroup>
                  )
                  : 
                  
                  (
                  <RadioGroup label={seccion.title} onValueChange={(value) => handleChange(seccion.title, value)}>
                    {seccion.options.map((opcion, i)=> {
                    return (
                    <Radio key={i} value={opcion._id}>
                      {opcion.name}
                    </Radio>)
                  })}
                  </RadioGroup>
                  )


                }
              </div>)
            })}
          </div>
        </form>
      )
  }
}

export default FilterOptions