import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8000",
  withCredentials: true,
  // 🔑  Typo here ⬇︎
  headers: {
    "Content-Type": "application/json", // ✅ NOT "application.json"
    Accept: "application/json",
  },
});

/* ----------------- API END‑POINT HELPERS ----------------- */
export const login = (data) => api.post("/api/user/login", data); // ← return the promise
export const register = (data) => api.post("/api/user/register", data);
export const getUserData = () => api.get("/api/user");
