import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { MessengerOrderByRelationAggregateInputSchema } from './MessengerOrderByRelationAggregateInputSchema';

export const BoxChatOrderByWithRelationInputSchema: z.ZodType<Prisma.BoxChatOrderByWithRelationInput> = z.object({
  boxChatId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  Messenger: z.lazy(() => MessengerOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BoxChatOrderByWithRelationInputSchema;
