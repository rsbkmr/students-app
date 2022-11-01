import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/Token";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken } = useContext(TokenContext);

  const login = (e) => {
    e.preventDefault();
    fetch("https://students-app-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setError(data.msg);
        data.msg || localStorage.setItem("token", data.token);
        data.msg || setToken(data.token);
      });
  };

  return (
    <form
      className="container-fluid mt-5"
      onSubmit={login}
      style={{ maxWidth: 500 }}
    >
      <div className="mb-3">
        <label htmlFor="login-username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="login-username"
          onChange={(e) => setUsername(e.target.value)}
          defaultValue={username}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="login-password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="login-password"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
        />
      </div>
      <p className="form-text text-danger text-bold">{error}</p>

      <button type="submit" className="btn btn-primary btn-lg w-100">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
