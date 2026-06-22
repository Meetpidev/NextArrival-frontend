import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "/api",
=======
  baseURL: "https://nextarrival-backend.onrender.com/api",
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
  withCredentials: true,
});

export default api;
