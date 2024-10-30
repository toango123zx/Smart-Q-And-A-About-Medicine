import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { MessengerListRelationFilterSchema } from './MessengerListRelationFilterSchema';

export const BoxChatWhereInputSchema: z.ZodType<Prisma.BoxChatWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BoxChatWhereInputSchema),z.lazy(() => BoxChatWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoxChatWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoxChatWhereInputSchema),z.lazy(() => BoxChatWhereInputSchema).array() ]).optional(),
  boxChatId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  Messenger: z.lazy(() => MessengerListRelationFilterSchema).optional()
}).strict();

export default BoxChatWhereInputSchema;