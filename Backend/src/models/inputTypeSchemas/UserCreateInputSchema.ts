import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BoxChatCreateNestedManyWithoutUserInputSchema } from './BoxChatCreateNestedManyWithoutUserInputSchema';
import { MessengerCreateNestedManyWithoutUserInputSchema } from './MessengerCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
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
  status: z.lazy(() => StatusSchema).optional(),
  BoxChat: z.lazy(() => BoxChatCreateNestedManyWithoutUserInputSchema).optional(),
  Messenger: z.lazy(() => MessengerCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
