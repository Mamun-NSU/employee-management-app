

import React, { useState } from "react";
import { login, getUser } from "./authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(form); // CSRF token handled in authApi
      const res = await getUser(); // Get logged-in user
      alert(`Login successful! Welcome ${res.data.name}`);
      navigate("/"); // Redirect to main page
    } catch (err) {
      console.error(err.response?.data);
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
