import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumStatusWithAggregatesFilterSchema } from './EnumStatusWithAggregatesFilterSchema';
import { StatusSchema } from './StatusSchema';

export const BoxChatScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BoxChatScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BoxChatScalarWhereWithAggregatesInputSchema),z.lazy(() => BoxChatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxChatScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxChatScalarWhereWithAggregatesInputSchema),z.lazy(() => BoxChatScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  boxChatId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumStatusWithAggregatesFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict();

export default BoxChatScalarWhereWithAggregatesInputSchema;
