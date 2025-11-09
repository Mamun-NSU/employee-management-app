import React, { useState } from "react";
import { register } from "./authApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(form); // CSRF token handled in authApi
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;


// import React, { useState } from "react";
// import { register } from "./authApi";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     try {
//       await register(form);
//       alert("Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err.response?.data);
//       setError(err.response?.data?.message || "Registration failed!");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           className="form-control mb-2"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           className="form-control mb-2"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           className="form-control mb-2"
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="password_confirmation"
//           type="password"
//           placeholder="Confirm Password"
//           className="form-control mb-2"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
