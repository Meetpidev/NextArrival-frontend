import api from "../client";

export const adminApi = {
  analytics: () => api.get("/admin/analytics"),
  verifications: () => api.get("/admin/verifications"),
  verificationAction: (payload: any) => api.post("/admin/verifications", payload),
  listings: () => api.get("/admin/listings"),
  moderateListing: (payload: any) => api.post("/admin/listings/moderate", payload),
  refundList: () => api.get("/admin/refunds"),
  refundModerate: (payload: any) => api.put("/admin/refunds", payload),
  users: () => api.get("/admin/users"),
  banUser: (payload: any) => api.post("/admin/users/ban", payload),
  cmsList: () => api.get("/cms"),
  cmsUpdate: (payload: any) => api.put("/cms", payload),
  subscriptions: () => api.get("/admin/subscriptions"),
  moderateSubscription: (payload: any) => api.post("/admin/subscriptions/moderate", payload),
<<<<<<< HEAD
  partnerRequests: (params?: { page?: number; limit?: number; status?: string }) =>
    api.get("/admin/partner-requests", { params }),
  updatePartnerRequestStatus: (id: string, status: "PENDING" | "REVIEWED" | "RESOLVED" | "REJECTED") =>
    api.patch(`/admin/partner-requests/${id}/status`, { status }),
  contactInquiries: (params?: { page?: number; limit?: number; status?: string }) =>
    api.get("/admin/contact-inquiries", { params }),
  updateContactInquiryStatus: (id: string, status: "PENDING" | "REVIEWED" | "RESOLVED" | "REJECTED") =>
    api.patch(`/admin/contact-inquiries/${id}/status`, { status }),
  notifications: (params?: { page?: number; limit?: number; isRead?: boolean; type?: string }) =>
    api.get("/admin/notifications", { params }),
=======
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
};
