import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatCreateNestedManyWithoutUserInputSchema } from './BoxChatCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutMessengerInputSchema: z.ZodType<Prisma.UserCreateWithoutMessengerInput> = z.object({
  userId: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  dataOfBirth: z.coerce.date(),
  phoneNumber: z.string(),
  address: z.string(),
  salt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.string().optional(),
  BoxChat: z.lazy(() => BoxChatCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutMessengerInputSchema;
