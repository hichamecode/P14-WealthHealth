import { z } from "zod";
export declare const schema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodEffects<z.ZodEffects<z.ZodDate, Date, unknown>, string, unknown>;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodDate, Date, unknown>, string, unknown>;
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    zipCode: z.ZodString;
    department: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName?: string;
    lastName?: string;
    startDate?: string;
    department?: string;
    dateOfBirth?: string;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}, {
    firstName?: string;
    lastName?: string;
    startDate?: unknown;
    department?: string;
    dateOfBirth?: unknown;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}>;
export type FormFields = z.infer<typeof schema>;
