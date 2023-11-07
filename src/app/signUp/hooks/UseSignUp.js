import UseUserContext from "@/context/hook/UseUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const UseSignUp = () => {
    const router = useRouter()

    const { registerUser,msg, authenticated } = UseUserContext()
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const { email, password, confirmPassword } = user

    const inputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        registerUser({ email, password, confirmPassword });
    };

    useEffect(() => {
        if (authenticated) {

            router.push("/")
        }

        if (msg) {
            // openSnackbar(msg.msg, msg.category)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated, msg]);
    return {
        inputChange, onSubmit
    }
}

export default UseSignUp;