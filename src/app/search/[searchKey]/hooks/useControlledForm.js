import { useState } from 'react'

export function useControlledForm() {
    const [form, setForm] = useState({})
    const ORDER_BY = "orderBy"

    const CHECKBOX = "checkbox"
    const isCheckbox = (text) => text == CHECKBOX

    const handleChange = (name, value) => {
        setForm({
        ...form, 
        [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(form)
    }

    const handleSelect = (value) => {
        setForm({
            ...form,
            [ORDER_BY]: value
        })
    }

    return {handleChange, handleSubmit, isCheckbox, handleSelect}
}