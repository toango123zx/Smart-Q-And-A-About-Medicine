import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutBoxChatInputSchema } from './UserCreateNestedOneWithoutBoxChatInputSchema';

export const BoxChatCreateWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatCreateWithoutMessengerInput> = z.object({
  boxChatId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBoxChatInputSchema)
}).strict();

export default BoxChatCreateWithoutMessengerInputSchema;
