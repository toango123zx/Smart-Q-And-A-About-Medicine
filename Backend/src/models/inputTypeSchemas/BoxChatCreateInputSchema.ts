import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { UserCreateNestedOneWithoutBoxChatInputSchema } from './UserCreateNestedOneWithoutBoxChatInputSchema';
import { MessengerCreateNestedManyWithoutBoxChatInputSchema } from './MessengerCreateNestedManyWithoutBoxChatInputSchema';

export const BoxChatCreateInputSchema: z.ZodType<Prisma.BoxChatCreateInput> = z.object({
  boxChatId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutBoxChatInputSchema),
  Messenger: z.lazy(() => MessengerCreateNestedManyWithoutBoxChatInputSchema).optional()
}).strict();

export default BoxChatCreateInputSchema;
