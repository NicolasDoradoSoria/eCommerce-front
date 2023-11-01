"use client"

import UserManagement from "@/components/UserManagement";
import UseSignUp from "../hooks/UseSignUp";

const SignUpView = () => {
    const {inputChange, onSubmit } = UseSignUp()

    return (
        <UserManagement title={"Registrar"} onSubmit={onSubmit}>
            <UserManagement.EmailInput inputChange={inputChange}/>
            <UserManagement.PasswordInput inputChange={inputChange}/>
            <UserManagement.ConfirmInput inputChange={inputChange}/>
            <UserManagement.UserLink/>
        </UserManagement>
    );
}

export default SignUpView;