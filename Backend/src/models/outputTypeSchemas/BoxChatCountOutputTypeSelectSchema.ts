import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BoxChatCountOutputTypeSelectSchema: z.ZodType<Prisma.BoxChatCountOutputTypeSelect> = z.object({
  Messenger: z.boolean().optional(),
}).strict();

export default BoxChatCountOutputTypeSelectSchema;
