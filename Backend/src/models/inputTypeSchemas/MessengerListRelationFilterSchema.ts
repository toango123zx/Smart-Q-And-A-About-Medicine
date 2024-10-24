import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MessengerWhereInputSchema } from './MessengerWhereInputSchema';

export const MessengerListRelationFilterSchema: z.ZodType<Prisma.MessengerListRelationFilter> = z.object({
  every: z.lazy(() => MessengerWhereInputSchema).optional(),
  some: z.lazy(() => MessengerWhereInputSchema).optional(),
  none: z.lazy(() => MessengerWhereInputSchema).optional()
}).strict();

export default MessengerListRelationFilterSchema;
