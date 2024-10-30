import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const BoxChatUncheckedCreateWithoutMessengerInputSchema: z.ZodType<Prisma.BoxChatUncheckedCreateWithoutMessengerInput> = z.object({
  boxChatId: z.string().cuid().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional()
}).strict();

export default BoxChatUncheckedCreateWithoutMessengerInputSchema;
