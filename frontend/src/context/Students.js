import { createContext, useState } from "react";

const StudentsContext = createContext();

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentsContext.Provider>
  );
};

export { StudentsContext, StudentsProvider };
