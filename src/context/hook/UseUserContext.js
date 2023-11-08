import { useContext } from "react";
import UserContext from "../userContext/UserContext";

const UseUserContext = () => {
    //userContext
    const userContext = useContext(UserContext);
    const { loading, user, authenticated, login, registerUser, authenticatedUser, signOff, msg, category } = userContext;

    return {
        authenticatedUser,
        registerUser,
        login,
        loading,
        user,
        authenticated,
        signOff,
        msg,
        category
    }
}

export default UseUserContext;