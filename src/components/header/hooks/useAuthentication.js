import { useContext, useEffect } from "react";

const useAuthentication = () => {

    const authenticated = true
    const loading = false
    const isAdmin = true

    useEffect(() => {
        // authenticatedUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        authenticated,
        // signOff,
        loading,
        isAdmin
    };
}

export default useAuthentication;