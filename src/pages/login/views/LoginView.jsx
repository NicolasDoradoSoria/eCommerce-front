import UserManagement from "../../../components/UserManagement";
import UseLogin from "../hooks/UseLogin";

const LoginView = () => {

    const {inputChange, onSubmit } = UseLogin()
    return (
        <UserManagement title={"Iniciar secion"} onSubmit={onSubmit}>
            <UserManagement.EmailInput inputChange={inputChange} />
            <UserManagement.PasswordInput inputChange={inputChange} />
            <UserManagement.UserLink />
        </UserManagement>
    );
}

export default LoginView;