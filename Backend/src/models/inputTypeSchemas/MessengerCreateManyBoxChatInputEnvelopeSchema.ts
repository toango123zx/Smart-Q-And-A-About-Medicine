import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerCreateManyBoxChatInputSchema } from './MessengerCreateManyBoxChatInputSchema';

export const MessengerCreateManyBoxChatInputEnvelopeSchema: z.ZodType<Prisma.MessengerCreateManyBoxChatInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessengerCreateManyBoxChatInputSchema),z.lazy(() => MessengerCreateManyBoxChatInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MessengerCreateManyBoxChatInputEnvelopeSchema;
