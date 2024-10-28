import { ZodRequestBody } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

export interface LoginRequestDto {
    username: string;
    password: string;
}

export const LoginRequestDtoSchema = z.object({
    username: z.string(),
    password: z.string(),
})