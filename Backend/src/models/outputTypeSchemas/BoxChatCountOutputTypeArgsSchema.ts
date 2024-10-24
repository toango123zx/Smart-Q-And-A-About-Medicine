import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatCountOutputTypeSelectSchema } from './BoxChatCountOutputTypeSelectSchema';

export const BoxChatCountOutputTypeArgsSchema: z.ZodType<Prisma.BoxChatCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BoxChatCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BoxChatCountOutputTypeSelectSchema;
