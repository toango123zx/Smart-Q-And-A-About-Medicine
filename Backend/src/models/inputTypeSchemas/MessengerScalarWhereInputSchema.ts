import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';

export const MessengerScalarWhereInputSchema: z.ZodType<Prisma.MessengerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessengerScalarWhereInputSchema),z.lazy(() => MessengerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessengerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessengerScalarWhereInputSchema),z.lazy(() => MessengerScalarWhereInputSchema).array() ]).optional(),
  messengerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  boxChatId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleteAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict();

export default MessengerScalarWhereInputSchema;
