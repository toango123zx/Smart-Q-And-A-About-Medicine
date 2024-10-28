import type { Prisma } from './path/to/prisma/client';

import { z } from 'zod';
import { BoxChatWhereInputSchema } from './BoxChatWhereInputSchema';

export const BoxChatRelationFilterSchema: z.ZodType<Prisma.BoxChatRelationFilter> = z.object({
  is: z.lazy(() => BoxChatWhereInputSchema).optional(),
  isNot: z.lazy(() => BoxChatWhereInputSchema).optional()
}).strict();

export default BoxChatRelationFilterSchema;
