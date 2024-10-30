
import { z } from "zod";
import dayjs from "dayjs";


export const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "A valid first name is required" })
    .regex(/^[A-Za-z\s-]+$/, {
      message: "It can only contain letters, spaces or hyphens",
    }),
  lastName: z
    .string()
    .min(2, { message: "A valid last name is required" })
    .regex(/^[A-Za-z\s-]+$/, {
      message: "It can only contain letters, spaces, or hyphens",
    }),
  dateOfBirth: z
    .instanceof(Object)
    .transform((value) => dayjs(value).format("YYYY-MM-DD")),
  startDate: z
    .instanceof(Object)
    .transform((value) => dayjs(value).format("YYYY-MM-DD")),
  street: z.string().min(5, { message: "A valid address is required" }),
  city: z.string().min(2, { message: "A valid city is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().regex(/^\d{5}$/, { message: "Invalid zip code" }),
  department: z.string().min(1, { message: "Department is required" }),
});

export type FormFields = z.infer<typeof schema>;