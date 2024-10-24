import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BoxChatOrderByWithRelationInputSchema } from './BoxChatOrderByWithRelationInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const MessengerOrderByWithRelationInputSchema: z.ZodType<Prisma.MessengerOrderByWithRelationInput> = z.object({
  messengerId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  boxChatId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deleteAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  BoxChat: z.lazy(() => BoxChatOrderByWithRelationInputSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default MessengerOrderByWithRelationInputSchema;
