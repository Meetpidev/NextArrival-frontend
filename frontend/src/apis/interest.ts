import api from "./client";

export type InterestRequestPayload = {
  propertyId: string;
  message?: string;
};

export const interestApi = {
  create: (payload: InterestRequestPayload) => api.post("/interests", payload),
  pending: (params?: { page?: number; limit?: number }) => api.get("/interests/pending", { params }),
  accept: (id: string) => api.patch(`/interests/${id}/accept`),
  reject: (id: string) => api.patch(`/interests/${id}/reject`),
};
