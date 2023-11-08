"use client"

import UserManagement from "@/components/UserManagement";
import UseLogin from "../hooks/UseLogin";

const LoginView = () => {
    const {inputChange, onSubmit } = UseLogin()

    
    return (
        <UserManagement title={"Iniciar sesion"} onSubmit={onSubmit}>
            <UserManagement.EmailInput inputChange={inputChange}/>
            <UserManagement.PasswordInput  inputChange={inputChange}/>
            <UserManagement.UserLink />
        </UserManagement>
    );
}

export default LoginView;