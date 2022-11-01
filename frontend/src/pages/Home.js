import { useContext } from "react";
import { Link } from "react-router-dom";
import AddStudent from "../components/AddStudent";
import Navbar from "../components/Navbar";
import StudentsList from "../components/StudentsList";
import { TokenContext } from "../context/Token";

const Home = () => {
  const { token } = useContext(TokenContext);
  return (
    <div>
      <Navbar />
      {token ? (
        <div className="container-fluid mt-5" style={{ maxWidth: 700 }}>
          <AddStudent />
          <StudentsList />
        </div>
      ) : (
        <div className="px-4 py-5 text-center bg-light">
          <h1 className="display-5 fw-bold">
            A CRUD application for students.
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              A full-stack project made by Rishabh Kumar.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
