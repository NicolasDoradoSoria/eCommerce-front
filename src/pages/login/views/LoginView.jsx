import UserManagement from "../../../components/UserManagement";

const LoginView = () => {
    return (
        <UserManagement title={"Iniciar secion"}>
            <UserManagement.EmailInput/>
            <UserManagement.PasswordInput/>
            <UserManagement.UserLink/>
        </UserManagement>
    );
}
 
export default LoginView;