import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";
import ShowEmployee from "./components/ShowEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import { ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css"; 

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
            <Route path="/update/:id" element={<UpdateEmployee />} />
          </Routes>
        </div>
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>
    </Router>
  );
}

export default App;

