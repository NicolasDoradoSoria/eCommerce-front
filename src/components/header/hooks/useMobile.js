"use client"

import { useState } from "react"

const useMobile = () => {

    // hook de barra desplegable del admistrador
    const [dropdownAdmin, setDropdownAdmin] = useState(false)

    // hook de barra desplegable de la categoria
    const [dropdownCategory, setDropdownCategory] = useState(false)


    // sirve para cuando paso el mouse por el menu despliegue administrador
    const onMouseEnterAdmin = () => (window.innerWidth < 960) ? setDropdownAdmin(false) : setDropdownAdmin(true)
    const onMouseLeaveAdmin = () => (window.innerWidth < 960) ? setDropdownAdmin(false) : setDropdownAdmin(false)

    // sirve para cuando paso el mouse por la categoria se despliegue el menu
    const onMouseEnterCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(true)
    const onMouseLeaveCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(false)

    return {
        onMouseEnterAdmin,
        onMouseLeaveAdmin,
        onMouseEnterCategory,
        onMouseLeaveCategory,
        dropdownAdmin,
        dropdownCategory
    }
}

export default useMobile;