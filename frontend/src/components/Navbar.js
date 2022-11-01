import { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/Token";

const Navbar = () => {
  const { token, setToken } = useContext(TokenContext);

  const logout = () => {
    setToken("");
  };

  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid" style={{ maxWidth: 700 }}>
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <div className="d-flex">
          {token ? (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary" type="submit">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
