// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   withCredentials: true, // Required for Sanctum cookie
// });

// export const register = (data) => api.post("/register", data);
// export const login = (data) => api.post("/login", data);
// export const logout = () => api.post("/logout");
// export const getUser = () => api.get("/user");


import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true, // Important for Sanctum cookies
});

// Get CSRF cookie before login/register
export const getCsrfToken = () => axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");

// Register API
export const register = async (data) => {
  await getCsrfToken(); // ensures CSRF token is set
  return api.post("/register", data);
};

// Login API
export const login = async (data) => {
  await getCsrfToken(); // ensures CSRF token is set
  return api.post("/login", data);
};

// Logout
export const logout = () => api.post("/logout");

// Get authenticated user
export const getUser = () => api.get("/user");

