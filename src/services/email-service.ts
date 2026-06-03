import { api } from "@/lib/api";
import { SendContactEmailSchema } from "@/schema/email";

export const emailService = {
  sendEmailContact: async (payload: SendContactEmailSchema) => {
    const res = await api.post("/email", payload);
    return res.data;
  },
};
