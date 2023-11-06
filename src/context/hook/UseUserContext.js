import { useContext } from "react";
import UserContext from "../userContext/UserContext";

const UseUserContext = () => {
    //userContext
    const userContext = useContext(UserContext);
    const { loading, user, authenticated, login, registerUser, authenticatedUser, signOff } = userContext;

    return {
        authenticatedUser,
        registerUser,
        login,
        loading,
        user,
        authenticated,
        signOff
    }
}

export default UseUserContext;