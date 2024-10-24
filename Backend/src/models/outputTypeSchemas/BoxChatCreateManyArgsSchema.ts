import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoxChatCreateManyInputSchema } from '../inputTypeSchemas/BoxChatCreateManyInputSchema'

export const BoxChatCreateManyArgsSchema: z.ZodType<Prisma.BoxChatCreateManyArgs> = z.object({
  data: z.union([ BoxChatCreateManyInputSchema,BoxChatCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BoxChatCreateManyArgsSchema;
