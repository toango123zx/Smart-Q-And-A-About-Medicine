import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumStatusFilterSchema } from './EnumStatusFilterSchema';
import { StatusSchema } from './StatusSchema';
import { BoxChatRelationFilterSchema } from './BoxChatRelationFilterSchema';
import { BoxChatWhereInputSchema } from './BoxChatWhereInputSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const MessengerWhereInputSchema: z.ZodType<Prisma.MessengerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessengerWhereInputSchema),z.lazy(() => MessengerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessengerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessengerWhereInputSchema),z.lazy(() => MessengerWhereInputSchema).array() ]).optional(),
  messengerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  boxChatId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deleteAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
  BoxChat: z.union([ z.lazy(() => BoxChatRelationFilterSchema),z.lazy(() => BoxChatWhereInputSchema) ]).optional(),
  User: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default MessengerWhereInputSchema;
