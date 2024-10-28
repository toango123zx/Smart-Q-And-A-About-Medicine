import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MessengerCountOrderByAggregateInputSchema } from './MessengerCountOrderByAggregateInputSchema';
import { MessengerMaxOrderByAggregateInputSchema } from './MessengerMaxOrderByAggregateInputSchema';
import { MessengerMinOrderByAggregateInputSchema } from './MessengerMinOrderByAggregateInputSchema';

export const MessengerOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessengerOrderByWithAggregationInput> = z.object({
  messengerId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  boxChatId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deleteAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MessengerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessengerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessengerMinOrderByAggregateInputSchema).optional()
}).strict();

export default MessengerOrderByWithAggregationInputSchema;
