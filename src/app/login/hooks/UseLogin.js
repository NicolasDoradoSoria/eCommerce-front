"use client"

import UseSnackbarContext from "@/context/hook/UseSnackbarContext";
import UseUserContext from "@/context/hook/UseUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const UseLogin = () => {
    const router = useRouter()
    const { login, authenticated, msg } = UseUserContext()
    const { openSnackbar } = UseSnackbarContext()

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { email, password } = user
    
    const inputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        login({ email, password });
    };
    useEffect(() => {
        if (authenticated) router.push("/")
        if (msg) openSnackbar(msg)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated, msg])
    return {
        inputChange, onSubmit,
    }
}

export default UseLogin;