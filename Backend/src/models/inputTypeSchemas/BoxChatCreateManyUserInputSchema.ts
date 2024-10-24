import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';

export const BoxChatCreateManyUserInputSchema: z.ZodType<Prisma.BoxChatCreateManyUserInput> = z.object({
  boxChatId: z.string().cuid().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional()
}).strict();

export default BoxChatCreateManyUserInputSchema;
