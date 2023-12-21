import { useEffect, useState } from "react";

//ver que espera a que se sette up
export function useGetUserToken() {
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])
    
    return token;
}


//ver que no le importa
/*
export function useGetUserToken() {
    return localStorage.getItem("token");
}
*/


export function useSetUserToken(token) {
    localStorage.setItem("token", token);
}