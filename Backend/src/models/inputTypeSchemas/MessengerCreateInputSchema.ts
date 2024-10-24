import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BoxChatCreateNestedOneWithoutMessengerInputSchema } from './BoxChatCreateNestedOneWithoutMessengerInputSchema';
import { UserCreateNestedOneWithoutMessengerInputSchema } from './UserCreateNestedOneWithoutMessengerInputSchema';

export const MessengerCreateInputSchema: z.ZodType<Prisma.MessengerCreateInput> = z.object({
  messengerId: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deleteAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  BoxChat: z.lazy(() => BoxChatCreateNestedOneWithoutMessengerInputSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutMessengerInputSchema)
}).strict();

export default MessengerCreateInputSchema;
