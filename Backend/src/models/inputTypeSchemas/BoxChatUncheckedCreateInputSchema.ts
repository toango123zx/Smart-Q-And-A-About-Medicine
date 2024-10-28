import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { MessengerUncheckedCreateNestedManyWithoutBoxChatInputSchema } from './MessengerUncheckedCreateNestedManyWithoutBoxChatInputSchema';

export const BoxChatUncheckedCreateInputSchema: z.ZodType<Prisma.BoxChatUncheckedCreateInput> = z.object({
  boxChatId: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  Messenger: z.lazy(() => MessengerUncheckedCreateNestedManyWithoutBoxChatInputSchema).optional()
}).strict();

export default BoxChatUncheckedCreateInputSchema;
