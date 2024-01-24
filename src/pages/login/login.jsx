import { useContext, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/authContext";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user, isFetching, dispatch);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
          <h3 className="loginLogo">Facebook Clone</h3>
          <span className="loginDesc">
            Connect with friends and the world around you
          </span>
        </div>
        <form className="loginRight" onSubmit={handleClick}>
          <div className="loginBox">
            <input
              type="email"
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              required
              minLength={6}
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
