import '../pages/login/styles/login.css';
import { Children } from "react";
import 'tailwindcss/tailwind.css';
import { cloneElement } from "react";
import EmailInput from './EmailInput';
import ConfirmInput from './ConfirmInput';
import PasswordInput from './PasswordInput';
import UserLink from './UserLink';

const UserManagement = ({ children, title, onSubmit }) => {
    const renderChildren = Children.map(children, (child) => {
        if (child.type === EmailInput) {
            return cloneElement(child);
        }
        if (child.type === PasswordInput) {
            return cloneElement(child);
        }
        if (child.type === ConfirmInput) {
            return cloneElement(child);
        }
        if (child.type === UserLink) {
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
UserManagement.EmailInput = EmailInput
UserManagement.ConfirmInput = ConfirmInput
UserManagement.PasswordInput = PasswordInput
UserManagement.UserLink = UserLink

export default UserManagement;
