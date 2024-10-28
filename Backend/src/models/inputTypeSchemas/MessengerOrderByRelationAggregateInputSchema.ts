import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MessengerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MessengerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MessengerOrderByRelationAggregateInputSchema;
