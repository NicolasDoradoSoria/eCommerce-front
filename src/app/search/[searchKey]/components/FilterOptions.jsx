import React from 'react'
import {Radio, RadioGroup, Checkbox, CheckboxGroup, Button, Select, SelectItem } from "@nextui-org/react"
import { useControlledForm } from '../hooks/useControlledForm'
import { filtros } from '../temporaryData'

function FilterOptions() {
  const {handleChange, handleSubmit, isCheckbox, handleSelect} = useControlledForm()

  return (
    <form className='ms-3 mt-3 lg:ms-12 lg:mt-20'>
      <div className='flex flex-col'>
        <Button variant="ghost" color='primary' onPress={handleSubmit} className='my-3'>Filtrar</Button>
        <Select label="Ordenar por" onSelectionChange={handleSelect} variant='bordered'>
          <SelectItem value={"default"}>Relevancia</SelectItem>
          <SelectItem value={"menor-precio"}>Menor precio</SelectItem>
          <SelectItem value={"mayor-precio"}>Mayor Precio</SelectItem>
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
                  <Checkbox key={i} value={opcion}>{opcion}</Checkbox>
                )
              })}
              </CheckboxGroup>
              )
              : (
              <RadioGroup label={seccion.title} onValueChange={(value) => handleChange(seccion.title, value)}>
                {seccion.options.map((opcion, i)=> {
                return (
                <Radio key={i} value={opcion}>
                  {opcion}
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

export default FilterOptions