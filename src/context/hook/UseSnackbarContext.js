import { useContext } from "react";
import SnackBarContext from "../snackbarContext/SnackbarContext";

const UseSnackbarContext = () => {
    const snackBarContext = useContext(SnackBarContext)
    const { open, msg, category, closeSnackbar, openSnackbar } = snackBarContext

    return {open, msg, category, closeSnackbar, openSnackbar}
}
 
export default UseSnackbarContext;