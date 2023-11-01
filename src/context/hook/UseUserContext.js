import { useContext } from "react";
import UserContext from "../userContext/UserContext";

const UseUserContext = () => {
    //userContext
    const userContext = useContext(UserContext);
    const { loading, user, authenticated } = userContext;

    return {
        loading,
        user,
        authenticated
    }
}

export default UseUserContext;