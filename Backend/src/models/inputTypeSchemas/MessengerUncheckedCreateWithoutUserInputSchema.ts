import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const MessengerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.MessengerUncheckedCreateWithoutUserInput> = z.object({
  messengerId: z.string().cuid().optional(),
  content: z.string(),
  boxChatId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deleteAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional()
}).strict();

export default MessengerUncheckedCreateWithoutUserInputSchema;
