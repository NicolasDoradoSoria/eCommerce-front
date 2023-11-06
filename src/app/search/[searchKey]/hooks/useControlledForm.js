import { useState } from 'react'

export function useControlledForm() {
    const [form, setForm] = useState({})

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

    return {handleChange, handleSubmit, isCheckbox}
}