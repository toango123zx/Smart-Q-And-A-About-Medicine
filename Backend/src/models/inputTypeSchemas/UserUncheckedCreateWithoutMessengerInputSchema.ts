import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatUncheckedCreateNestedManyWithoutUserInputSchema } from './BoxChatUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutMessengerInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutMessengerInput> = z.object({
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
  BoxChat: z.lazy(() => BoxChatUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutMessengerInputSchema;
