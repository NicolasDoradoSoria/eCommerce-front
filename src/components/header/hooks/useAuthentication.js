import UseUserContext from "@/context/hook/UseUserContext";
import {useEffect } from "react";

const useAuthentication = () => {

    const {authenticated, authenticatedUser, loading, signOff} = UseUserContext()
    const isAdmin = true

    useEffect(() => {
        authenticatedUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        authenticated,
        signOff,
        loading,
        isAdmin
    };
}

export default useAuthentication;