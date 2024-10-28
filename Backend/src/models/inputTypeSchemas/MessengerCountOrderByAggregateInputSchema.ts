import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const MessengerCountOrderByAggregateInputSchema: z.ZodType<Prisma.MessengerCountOrderByAggregateInput> = z.object({
  messengerId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  boxChatId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deleteAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default MessengerCountOrderByAggregateInputSchema;
