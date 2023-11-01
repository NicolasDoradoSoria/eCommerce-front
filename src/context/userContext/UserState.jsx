import { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESSFUL,
  DELETE_MSG,
  REGISTER_ERROR,
  GET_USER,
  GET_USER_SUCCESSFUL,
  SIGN_OFF,
} from "../types";

const UserState = (props) => {
  const initialState = {
    // token: localStorage.getItem("token"),
    authenticated: false,
    user: null,
    loading: false,
    msg: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);


  // registra un usuario
  const registerUser = async (data) => {
    try {
      
    } catch (error) {
      console.log(error.response.data)
      const alert = {
        msg: error.response.data.msg,
        category: "error"
      }
      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });
    }
  };

  // devuelve el usuario autentificado
  const authenticatedUser = async () => {

    const token = localStorage.getItem("token");
    
    try {
      
    } catch (error) {
      console.log(error.response.data.msg)
    }
  };

  // pide una peticon a la api para iniciar sesion
  const login = async (data) => {
    try {
      
    } catch (error) {
      console.log(error.response.data.msg)
      const alert = {
        msg: error.response.data.msg,
        category: "error"
      }
      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });

    }
  };

  //cerrar secion
  const signOff = () => {
    try {
      dispatch({
        type: SIGN_OFF,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        authenticated: state.authenticated,
        loading: state.loading,
        msg: state.msg,
        registerUser,
        login,
        authenticatedUser,
        signOff,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
