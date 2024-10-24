import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerUncheckedCreateNestedManyWithoutUserInputSchema } from './MessengerUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutBoxChatInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBoxChatInput> = z.object({
  userId: z.string().cuid().optional(),
  username: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  email: z.string(),
  dataOfBirth: z.coerce.date(),
  phoneNumber: z.string(),
  adress: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.string().optional(),
  Messenger: z.lazy(() => MessengerUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutBoxChatInputSchema;
