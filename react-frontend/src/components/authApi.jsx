import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Laravel backend
  withCredentials: true,             // Important for Sanctum cookies
});

// CSRF token
export const getCsrfToken = () => api.get("/sanctum/csrf-cookie");

// Register
export const register = async (data) => {
  await getCsrfToken();
  return api.post("/register", data);
};

// Login
export const login = async (data) => {
  await getCsrfToken();
  return api.post("/login", data);
};

// Logout
export const logout = () => api.post("/logout");

// Get authenticated user
export const getUser = () => api.get("/user");




// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://127.0.0.1:8000",
//   withCredentials: true,
// });

// export const getCsrfToken = () => api.get("/sanctum/csrf-cookie");

// export const register = async (data) => {
//   await getCsrfToken();
//   return api.post("/register", data);
// };

// export const login = async (data) => {
//   await getCsrfToken();
//   return api.post("/login", data);
// };

// export const logout = () => api.post("/logout");

// export const getUser = () => api.get("/user");

