"use client"

import UseUserContext from "@/context/hook/UseUserContext";
import { useState } from "react";

const UseLogin = () => {

    const {login} = UseUserContext()
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

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

    return {
        inputChange, onSubmit,
    }
}

export default UseLogin;