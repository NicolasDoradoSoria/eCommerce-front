import { get_products_headers } from '@/service/Products.urls'
import { useState } from 'react'

export function useControlledForm(setSortType, setSortOrder) {
    const MENOR_PRECIO = "menor-precio"
    const MAYOR_PRECIO = "mayor-precio"
    const DEFAULT = "relevancia"

    const [form, setForm] = useState({})
    
    const CHECKBOX = "checkbox"
    const isCheckbox = (text) => text == CHECKBOX

    const handleChange = (name, value) => {
        setForm({
        ...form, 
        [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
    }

    const handleSelect = (value) => {
        if (value.currentKey == MAYOR_PRECIO) {
            setSortType(get_products_headers.price)
            setSortOrder(get_products_headers.desc)
        } else if (value.currentKey == MENOR_PRECIO) {
            setSortType(get_products_headers.price)
            setSortOrder(get_products_headers.asc)
        } else {
            setSortType("")
            setSortOrder("")
        }
    }

    return {handleChange, handleSubmit, isCheckbox, handleSelect, DEFAULT, MAYOR_PRECIO, MENOR_PRECIO}
}