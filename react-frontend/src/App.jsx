

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";
import ShowEmployee from "./components/ShowEmployee";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<ShowEmployee />} />
            <Route path="/create" element={<CreateEmployee />} />
            <Route path="/show" element={<ShowEmployee />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


