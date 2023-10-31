import { useState } from "react";

const UseSignUp = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
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

export default UseSignUp;