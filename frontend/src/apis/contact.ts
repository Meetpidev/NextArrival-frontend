import api from "./client";

export type ContactTicketPayload = {
  whoAreYou: string;
  fullName: string;
  email: string;
  destinationCity?: string;
  visaStatus?: string;
  subject: string;
  messageDetail: string;
};

export const contactApi = {
  submitTicket: (payload: ContactTicketPayload) => api.post("/contact", payload),
};
