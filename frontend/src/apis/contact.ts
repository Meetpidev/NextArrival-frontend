import api from "./client";

export type ContactTicketPayload = {
<<<<<<< HEAD
  whoAreYou: string;
  fullName: string;
  email: string;
  destinationCity?: string;
  visaStatus?: string;
  subject: string;
  messageDetail: string;
=======
  identity: string;
  fullName: string;
  email: string;
  destinationCity: string;
  permitStatus: string;
  subject: string;
  message: string;
>>>>>>> 9bd3f45c49eaeac22bfeeeb188cad76efd6bcde0
};

export const contactApi = {
  submitTicket: (payload: ContactTicketPayload) => api.post("/contact", payload),
};
