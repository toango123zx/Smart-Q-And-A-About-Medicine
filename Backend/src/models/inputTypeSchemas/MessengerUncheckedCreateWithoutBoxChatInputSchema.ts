import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const MessengerUncheckedCreateWithoutBoxChatInputSchema: z.ZodType<Prisma.MessengerUncheckedCreateWithoutBoxChatInput> = z.object({
  messengerId: z.string().cuid().optional(),
  content: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deleteAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional()
}).strict();

export default MessengerUncheckedCreateWithoutBoxChatInputSchema;
