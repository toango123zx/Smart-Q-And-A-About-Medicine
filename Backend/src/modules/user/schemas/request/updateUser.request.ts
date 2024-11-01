import { Prisma } from "@prisma/client";
import { z } from "zod";

export interface UserUpdateDto extends Prisma.UserUpdateInput {}

export const UserUpdateInputSchema = z.object({
  username: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  dataOfBirth: z.date(),
  phoneNumber: z.string(),
  address: z.string(),
});
