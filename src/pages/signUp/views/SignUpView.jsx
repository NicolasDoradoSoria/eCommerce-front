import UserManagement from "@/components/UserManagement";

const SignUpView = () => {
    return (
        <UserManagement title={"Registrar"}>
            <UserManagement.SignUp />
        </UserManagement>
    );
}

export default SignUpView;