import { useState, useContext } from "react";
import "./login.css";
import { login } from "../../context/authContext/authCalls";
import { AuthContext } from "../../context/authContext/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          value={email}
          placeholder="email"
          className="loginInput"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="loginInput"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleClick}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
