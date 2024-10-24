import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatSelectSchema } from '../inputTypeSchemas/BoxChatSelectSchema';
import { BoxChatIncludeSchema } from '../inputTypeSchemas/BoxChatIncludeSchema';

export const BoxChatArgsSchema: z.ZodType<Prisma.BoxChatDefaultArgs> = z.object({
  select: z.lazy(() => BoxChatSelectSchema).optional(),
  include: z.lazy(() => BoxChatIncludeSchema).optional(),
}).strict();

export default BoxChatArgsSchema;
