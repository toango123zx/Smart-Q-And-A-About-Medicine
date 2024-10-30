import { z } from "zod";

export interface LoginResponseDto {
    accessToken: string;
}

export const LoginResponseDtoSchema = z.object({
    accessToken: z.string(),
});