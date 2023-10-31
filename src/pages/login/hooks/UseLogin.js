import { useState } from "react";

const UseLogin = () => {

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
        // login({ email, password });
    };

    return {
        inputChange, onSubmit
    }
}

export default UseLogin;