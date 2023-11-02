import { useContext } from "react";
import UserContext from "../userContext/UserContext";

const UseUserContext = () => {
    //userContext
    const userContext = useContext(UserContext);
    const { loading, user, authenticated, login, registerUser } = userContext;

    return {
        registerUser,
        login,
        loading,
        user,
        authenticated
    }
}

export default UseUserContext;