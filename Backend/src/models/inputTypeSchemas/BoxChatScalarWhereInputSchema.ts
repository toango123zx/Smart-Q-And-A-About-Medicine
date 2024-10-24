import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';

export const BoxChatScalarWhereInputSchema: z.ZodType<Prisma.BoxChatScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BoxChatScalarWhereInputSchema),z.lazy(() => BoxChatScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxChatScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxChatScalarWhereInputSchema),z.lazy(() => BoxChatScalarWhereInputSchema).array() ]).optional(),
  boxChatId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict();

export default BoxChatScalarWhereInputSchema;
