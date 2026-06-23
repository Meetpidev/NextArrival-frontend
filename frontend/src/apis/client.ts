import axios from "axios";

const backendOrigin =
  process.env.NEXT_PUBLIC_BACKEND_ORIGIN || "http://localhost:5000";

const api = axios.create({
  baseURL: `${backendOrigin.replace(/\/$/, "")}/api`,
  withCredentials: true,
});

export default api;
