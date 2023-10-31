import UserManagement from "@/components/UserManagement";

const SignUpView = () => {
    return (
        <UserManagement title={"Registrar"}>
            <UserManagement.EmailInput/>
            <UserManagement.PasswordInput/>
            <UserManagement.ConfirmInput/>
            <UserManagement.UserLink/>
        </UserManagement>
    );
}

export default SignUpView;