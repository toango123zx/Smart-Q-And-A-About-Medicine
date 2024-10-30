import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { MessengerCreateManyUserInputSchema } from './MessengerCreateManyUserInputSchema';

export const MessengerCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.MessengerCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessengerCreateManyUserInputSchema),z.lazy(() => MessengerCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MessengerCreateManyUserInputEnvelopeSchema;
