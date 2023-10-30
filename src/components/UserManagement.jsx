import '../pages/login/styles/login.css';
import { Children } from "react";
import Login from "../pages/login/components/Login";
import 'tailwindcss/tailwind.css';
import { cloneElement } from "react";
import SignUp from '../pages/signUp/components/SignUp';

const UserManagement = ({ children, title, onSubmit }) => {
    const renderChildren = Children.map(children, (child) => {
        if (child.type === Login) {
            return cloneElement(child);
        }
        if (child.type === SignUp) {
            return cloneElement(child);
        }
        return child;
    })

    return (
        <div className='login-container'>
            <div className="login-box" id="card">
                <div className='content'>
                    <h1>{title}</h1>
                    <form onSubmit={onSubmit}>
                        {renderChildren}
                        <button type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
UserManagement.Login = Login
UserManagement.SignUp = SignUp


export default UserManagement;
