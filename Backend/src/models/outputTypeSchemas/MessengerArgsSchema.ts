import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessengerSelectSchema } from '../inputTypeSchemas/MessengerSelectSchema';
import { MessengerIncludeSchema } from '../inputTypeSchemas/MessengerIncludeSchema';

export const MessengerArgsSchema: z.ZodType<Prisma.MessengerDefaultArgs> = z.object({
  select: z.lazy(() => MessengerSelectSchema).optional(),
  include: z.lazy(() => MessengerIncludeSchema).optional(),
}).strict();

export default MessengerArgsSchema;
