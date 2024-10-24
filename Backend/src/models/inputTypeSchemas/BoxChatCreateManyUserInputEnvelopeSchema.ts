import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoxChatCreateManyUserInputSchema } from './BoxChatCreateManyUserInputSchema';

export const BoxChatCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BoxChatCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BoxChatCreateManyUserInputSchema),z.lazy(() => BoxChatCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BoxChatCreateManyUserInputEnvelopeSchema;
