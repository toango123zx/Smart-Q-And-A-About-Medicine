import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BoxChatCountOrderByAggregateInputSchema } from './BoxChatCountOrderByAggregateInputSchema';
import { BoxChatMaxOrderByAggregateInputSchema } from './BoxChatMaxOrderByAggregateInputSchema';
import { BoxChatMinOrderByAggregateInputSchema } from './BoxChatMinOrderByAggregateInputSchema';

export const BoxChatOrderByWithAggregationInputSchema: z.ZodType<Prisma.BoxChatOrderByWithAggregationInput> = z.object({
  boxChatId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BoxChatCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BoxChatMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BoxChatMinOrderByAggregateInputSchema).optional()
}).strict();

export default BoxChatOrderByWithAggregationInputSchema;
