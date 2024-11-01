import { Prisma } from "@prisma/client";
import { z } from "zod";

export interface CreateUserDto extends Prisma.UserCreateInput {}

export const UserCreateInputSchema = z.object({
  username: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  dataOfBirth: z.date(),
  phoneNumber: z.string(),
  address: z.string(),
});
