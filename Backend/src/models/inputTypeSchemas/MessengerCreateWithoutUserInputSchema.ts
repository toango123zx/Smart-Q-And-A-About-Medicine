import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StatusSchema } from './StatusSchema';
import { BoxChatCreateNestedOneWithoutMessengerInputSchema } from './BoxChatCreateNestedOneWithoutMessengerInputSchema';

export const MessengerCreateWithoutUserInputSchema: z.ZodType<Prisma.MessengerCreateWithoutUserInput> = z.object({
  messengerId: z.string().cuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deleteAt: z.coerce.date().optional().nullable(),
  status: z.lazy(() => StatusSchema).optional(),
  BoxChat: z.lazy(() => BoxChatCreateNestedOneWithoutMessengerInputSchema)
}).strict();

export default MessengerCreateWithoutUserInputSchema;
