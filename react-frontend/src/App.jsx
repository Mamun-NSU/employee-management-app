import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";
import ShowEmployee from "./components/ShowEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { getUser } from "./components/authApi";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch authenticated user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUser();
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header user={user} />
        <div className="flex-grow-1">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

            {/* Protected routes */}
            <Route path="/" element={user ? <ShowEmployee /> : <Navigate to="/login" />} />
            <Route path="/create" element={user ? <CreateEmployee /> : <Navigate to="/login" />} />
            <Route path="/show" element={user ? <ShowEmployee /> : <Navigate to="/login" />} />
            <Route path="/update/:id" element={user ? <UpdateEmployee /> : <Navigate to="/login" />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
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




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import CreateEmployee from "./components/CreateEmployee";
// import ShowEmployee from "./components/ShowEmployee";
// import UpdateEmployee from "./components/UpdateEmployee";
// import { ToastContainer } from "react-toastify";  
// import "react-toastify/dist/ReactToastify.css"; 

// function App() {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Header />
//         <div className="flex-grow-1">
//           <Routes>
//             <Route path="/" element={<ShowEmployee />} />
//             <Route path="/create" element={<CreateEmployee />} />
//             <Route path="/show" element={<ShowEmployee />} />
//             <Route path="/update/:id" element={<UpdateEmployee />} />
//           </Routes>
//         </div>
//         <Footer />

//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={true}
//           closeOnClick
//           pauseOnHover
//           draggable
//           theme="colored"
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;

