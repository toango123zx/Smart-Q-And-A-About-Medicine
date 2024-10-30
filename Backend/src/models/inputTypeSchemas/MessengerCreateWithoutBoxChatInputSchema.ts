import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutMessengerInputSchema } from './UserCreateNestedOneWithoutMessengerInputSchema';

export const MessengerCreateWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerCreateWithoutBoxChatInput> = z.object({
  messengerId: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deleteAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutMessengerInputSchema)
}).strict();

export default MessengerCreateWithoutBoxChatInputSchema;
