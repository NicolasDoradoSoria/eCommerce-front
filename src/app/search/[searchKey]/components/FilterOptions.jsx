import React from 'react'
import {Radio, RadioGroup, Checkbox, CheckboxGroup, Button } from "@nextui-org/react"
import { useControlledForm } from '../hooks/useControlledForm'
import { filtros } from '../temporaryData'

function FilterOptions() {
  const {handleChange, handleSubmit, isCheckbox} = useControlledForm()

  return (
    <form className='ms-16 mt-20'>
      <Button variant="ghost" color='primary' onPress={handleSubmit} className='my-3'>Filtrar</Button>
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
    </form>
  )
}

export default FilterOptions