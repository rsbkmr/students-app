import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TokenProvider } from "./context/Token";
import { StudentsProvider } from "./context/Students";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <TokenProvider>
      <StudentsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StudentsProvider>
    </TokenProvider>
  );
};

export default App;
