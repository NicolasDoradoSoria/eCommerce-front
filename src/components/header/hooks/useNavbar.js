"use client"

import { useContext, useEffect, useState } from "react";
import UserContext from "../../../context/userContext/UserContext";

const useNavbar = () => {

    // click en modo mobile para desplegar la barra de navegacion
    const [click, setClick] = useState(false)

    //  context de carrito
    // const { products, getOrder } = UseCartContext()

    //userContext
    const userContext = useContext(UserContext);
    const { authenticated, user } = userContext;

    const handleClick = () => setClick(!click)

    // navega a login inciar secion
    const navigateToLogin = () => {
        // navigate("login")
    }
    useEffect(() => {
        if (user) getOrder(user._id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated])


    return {
        click,
        handleClick,
        navigateToLogin,
        // products,
    };
}

export default useNavbar;