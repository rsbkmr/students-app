import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/Token";
import { StudentsContext } from "../context/Students";

const StudentsList = () => {
  const { token } = useContext(TokenContext);
  const { students, setStudents } = useContext(StudentsContext);

  const deleteStudent = (roll) => {
    fetch(`http://localhost:3000/student/${roll}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/student", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        console.log(data);
      });
  }, []);

  return (
    <ul className="list-group mx-auto mt-4">
      {students.map((item) => (
        <li
          key={item.roll}
          className="list-group-item d-flex justify-content-between"
        >
          <div>
            {item.roll} {item.name} ({item.course})
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteStudent(item.roll)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
