import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatWhereInputSchema } from './BoxChatWhereInputSchema';

export const BoxChatListRelationFilterSchema: z.ZodType<Prisma.BoxChatListRelationFilter> = z.object({
  every: z.lazy(() => BoxChatWhereInputSchema).optional(),
  some: z.lazy(() => BoxChatWhereInputSchema).optional(),
  none: z.lazy(() => BoxChatWhereInputSchema).optional()
}).strict();

export default BoxChatListRelationFilterSchema;
