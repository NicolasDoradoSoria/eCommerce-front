"use client"

import UseUserContext from "@/context/hook/UseUserContext";
import { useEffect } from "react";
import { useState } from "react";

const UseLogin = () => {

    const {login, authenticated, msg} = UseUserContext()
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
        if (authenticated) {
          
        //   navigate("/");
        }
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [authenticated])
    return {
        inputChange, onSubmit,
    }
}

export default UseLogin;