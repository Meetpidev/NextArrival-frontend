import api from "../client";

export const authApi = {
  me: () => api.get("/auth/me"),
<<<<<<< HEAD
  login: (payload: { email: string; password: string }) =>
    api.post("/auth/login", payload),
  signup: (payload: {
    email: string;
    password: string;
    fullName: string;
    role: "TENANT" | "OWNER";
  }) => api.post("/auth/signup", payload),
  google: (payload: { token: string; role: "TENANT" | "OWNER" }) =>
    api.post("/auth/google", payload),
  verifyOtp: (payload: { email: string; otp: string }) =>
    api.post("/auth/verify-otp", payload),
  resendOtp: (payload: { email: string }) =>
    api.post("/auth/resend-otp", payload),
  logout: () => api.post("/auth/logout"),
  forgotPassword: (payload: { email: string }) =>
    api.post("/auth/forgot-password", payload),
  resetPassword: (payload: {
    email: string;
    otp: string;
    newPassword: string;
  }) => api.post("/auth/reset-password", payload),
=======
  login: (payload: { email: string; password: string }) => api.post("/auth/login", payload),
  signup: (payload: { email: string; password: string; fullName: string; role: "TENANT" | "OWNER" }) =>
    api.post("/auth/signup", payload),
  google: (payload: { credential: string; role: string }) => api.post("/auth/google", payload),
  verifyOtp: (payload: { email: string; otp: string }) => api.post("/auth/verify-otp", payload),
  resendOtp: (payload: { email: string }) => api.post("/auth/resend-otp", payload),
  logout: () => api.post("/auth/logout"),
  forgotPassword: (payload: { email: string }) => api.post("/auth/forgot-password", payload),
  resetPassword: (payload: { email: string; otp: string; newPassword: string }) =>
    api.post("/auth/reset-password", payload),
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
};
