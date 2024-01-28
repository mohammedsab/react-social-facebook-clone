import { createContext, useReducer } from "react";
import AuthReducer from "./authReducer";

const INITIAL_STATE = {
  user: {
    _id: "65b26faee3536734a86ecd7c",
    username: "Mohammed6",
    email: "Mohammed6@gmail.com",
    avatar: "",
    cover: "",
    followers: [],
    followering: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
