import api from "./client";

export type PartnerInquiryPayload = {
  partnershipType: string;
  organizationName: string;
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  cityRegion?: string;
  partnershipGoal: string;
  tellUsMore: string;
};

export const partnerApi = {
  submitInquiry: (payload: PartnerInquiryPayload) => api.post("/partner", payload),
};
