import { useState, useContext } from "react";
import { StudentsContext } from "../context/Students";
import { TokenContext } from "../context/Token";

const AddStudent = () => {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [error, setError] = useState("");
  const { token } = useContext(TokenContext);
  const { setStudents } = useContext(StudentsContext);

  const addStudent = (e) => {
    e.preventDefault();
    if (roll === "" || name === "" || course === "") {
      return setError("Empty Fields");
    }
    fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name,
        roll,
        course,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setError(data.msg);
        data.msg || setStudents(data);
      });
  };
  return (
    <div className="card bg-light p-3">
      <form onSubmit={addStudent}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="add-student-name"
            placeholder="Name"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="add-student-roll"
            placeholder="Roll Number"
            onChange={(e) => setRoll(e.target.value)}
            defaultValue={roll}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="add-student-course"
            placeholder="Course"
            onChange={(e) => setCourse(e.target.value)}
            defaultValue={course}
          />
        </div>
        <p className="form-text text-danger text-bold">{error}</p>

        <button type="submit" className="btn btn-primary btn-sm">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
